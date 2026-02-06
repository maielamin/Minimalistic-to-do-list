
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'; // Core React hooks
import { Task, TaskTheme } from './types'; // Type definitions
import { 
  Calendar as CalendarIcon, // Lucide calendar icon
  Clock, // Lucide clock icon
  ChevronLeft, // Lucide left arrow
  ChevronRight, // Lucide right arrow
  GripVertical // Lucide drag handle icon
} from 'lucide-react'; // Icon library
import { 
  format, // Date formatting utility
  addMonths, // Month incrementing
  subMonths, // Month decrementing
  startOfMonth, // Get start of month date
  endOfMonth, // Get end of month date
  startOfWeek, // Get start of week date
  endOfWeek, // Get end of week date
  isSameMonth, // Month comparison
  isSameDay, // Day comparison
  addDays, // Day incrementing
  parse // String to Date parsing
} from 'date-fns'; // Comprehensive date utility library
import { clsx, type ClassValue } from 'clsx'; // Utility for conditional classes
import { twMerge } from 'tailwind-merge'; // Utility for merging Tailwind classes

/** 
 * Safely merges Tailwind CSS classes, handling conflicts automatically.
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Application Constants ---

const PLACEHOLDER_TEXT = "What needs to be done?"; // Default input placeholder

/**
 * Map of trigger keywords to their respective visual themes.
 */
const THEME_KEYWORDS: Record<string, TaskTheme> = {
  valentine: 'valentine', ramadhan: 'ramadan', ramadan: 'ramadan',
  easter: 'easter', brazil: 'carnival', carnival: 'carnival',
  halloween: 'halloween', spooky: 'halloween', ghost: 'halloween',
  christmas: 'christmas', holiday: 'christmas', santa: 'christmas',
  summer: 'summer', beach: 'summer', sunny: 'summer', gym: 'fitness',
  workout: 'fitness', exercise: 'fitness', training: 'fitness'
};

/**
 * Visual metadata for themes including background, emoji, and animations.
 */
const THEME_CONFIG: Record<TaskTheme, any> = {
  valentine: { bg: 'bg-rose-50/30', emoji: "💖", animationClass: "animate-theme-valentine", checkboxColor: 'bg-rose-400', checkboxBorder: 'border-rose-400' },
  ramadan: { bg: 'bg-blue-50/30', emoji: "🌙", animationClass: "animate-theme-ramadan", checkboxColor: 'bg-amber-500', checkboxBorder: 'border-amber-500' },
  easter: { bg: 'bg-purple-50/30', emoji: "🐰", animationClass: "animate-theme-easter", checkboxColor: 'bg-purple-400', checkboxBorder: 'border-purple-400' },
  carnival: { bg: 'bg-emerald-50/30', emoji: "✨", animationClass: "animate-theme-carnival", checkboxColor: 'bg-emerald-500', checkboxBorder: 'border-emerald-500' },
  halloween: { bg: 'bg-orange-50/30', emoji: "👻", animationClass: "animate-theme-halloween", checkboxColor: 'bg-orange-500', checkboxBorder: 'border-orange-500' },
  christmas: { bg: 'bg-red-50/30', emoji: "🎁", animationClass: "animate-theme-christmas", checkboxColor: 'bg-red-500', checkboxBorder: 'border-red-500' },
  summer: { bg: 'bg-amber-50/30', emoji: "☀️", animationClass: "animate-theme-summer", checkboxColor: 'bg-amber-500', checkboxBorder: 'border-amber-500' },
  autumn: { bg: 'bg-orange-50/20', emoji: "🍂", animationClass: "animate-theme-autumn", checkboxColor: 'bg-orange-700', checkboxBorder: 'border-orange-700' },
  fitness: { bg: 'bg-cyan-50/30', emoji: "💪", animationClass: "animate-theme-fitness", checkboxColor: 'bg-cyan-500', checkboxBorder: 'border-cyan-200' },
};

/**
 * Helper to determine theme based on description text.
 */
const getTaskTheme = (description: string): TaskTheme | null => {
  const lower = description.toLowerCase(); // Case-insensitive matching
  for (const [key, value] of Object.entries(THEME_KEYWORDS)) {
    if (lower.includes(key)) return value; // Return first match
  }
  return null; // No match found
};

// --- Sub-components ---

/**
 * Custom checkbox with smooth transitions and theme-aware colors.
 */
const Checkbox = ({ checked, onChange, themeColor = 'bg-slate-900', borderColor = 'border-slate-900' }: any) => (
  <button
    type="button" role="checkbox" aria-checked={checked} aria-label={checked ? "Incomplete" : "Complete"}
    onClick={onChange} // Trigger status toggle
    className={cn(
      "checkbox-bloom relative h-5 w-5 rounded-[6px] border-2 transition-all duration-300 flex-shrink-0 flex items-center justify-center overflow-hidden",
      checked ? `${themeColor} ${borderColor}` : "bg-transparent border-slate-200 hover:border-slate-400"
    )}
  >
    {checked && (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 text-white animate-check-draw">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )}
  </button>
);

/**
 * Specialized Button component with variant styles.
 */
const Button = React.forwardRef<HTMLButtonElement, any>(({ className, variant = 'primary', ...props }, ref) => {
  const variants: any = {
    primary: 'bg-slate-900 text-slate-50 hover:bg-slate-900/90 shadow',
    outline: 'border border-slate-200 bg-[#f9fafb] hover:bg-slate-100 text-slate-900',
    ghost: 'hover:bg-slate-100 text-slate-700',
  };
  return <button ref={ref} className={cn('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-slate-950 px-4 py-2', variants[variant], className)} {...props} />;
});

/**
 * Generic Popover component for dropdown-style interfaces.
 */
const Popover = ({ trigger, children, isOpen, onClose }: any) => {
  const popoverRef = useRef<HTMLDivElement>(null); // Ref for outside-click detection
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => { if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) onClose(); };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside); // Attach listener when open
    return () => document.removeEventListener('mousedown', handleClickOutside); // Cleanup listener
  }, [isOpen, onClose]);
  return (
    <div className="relative inline-block w-full">
      {trigger}
      {isOpen && <div ref={popoverRef} className="absolute z-50 mt-2 w-auto min-w-[280px] rounded-md border border-slate-200 bg-[#f9fafb] p-4 shadow-sm animate-in fade-in zoom-in-95 duration-200">{children}</div>}
    </div>
  );
};

// --- Main Interactive Components ---

/**
 * Custom-built minimalist calendar for date selection.
 */
const Calendar = ({ value, onChange }: any) => {
  const [currentMonth, setCurrentMonth] = useState(value || new Date()); // View state for navigation
  const monthStart = startOfMonth(currentMonth); // Start of currently viewed month
  const startDate = startOfWeek(monthStart); // Start of grid (includes trailing days from prev month)
  const endDate = endOfWeek(endOfMonth(monthStart)); // End of grid (includes leading days from next month)

  const days = useMemo(() => {
    const arr = []; let day = startDate;
    while (day <= endDate) { arr.push(day); day = addDays(day, 1); }
    return arr; // Array of all days in the 7xN calendar grid
  }, [startDate, endDate]);

  return (
    <div className="w-[250px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
        <div className="flex space-x-1">
          <Button variant="ghost" className="h-7 w-7 p-0" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}><ChevronLeft className="h-4 w-4" /></Button>
          <Button variant="ghost" className="h-7 w-7 p-0" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="text-[9px] font-bold text-slate-300 uppercase">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <button key={i} onClick={() => onChange(d)} className={cn("h-8 w-8 text-xs rounded-md font-medium", !isSameMonth(d, monthStart) && "text-slate-200", isSameDay(d, value || -1) ? "bg-slate-900 text-slate-50" : "hover:bg-slate-100")}>{format(d, "d")}</button>
        ))}
      </div>
    </div>
  );
};

/**
 * Custom-built time picker with scrolling columns.
 */
const TimePicker = ({ value, onChange }: any) => {
  const [h, m] = value.split(':'); // Parse current time
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')); // 00-23
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0')); // 00, 05, 10...
  return (
    <div className="flex gap-4 p-1">
      <div className="flex flex-col">
        <span className="text-[9px] uppercase text-slate-400 mb-2 font-bold text-center">Hours</span>
        <div className="h-48 overflow-y-auto custom-scrollbar flex flex-col gap-1 pr-2">
          {hours.map(hour => <button key={hour} onClick={() => onChange(`${hour}:${m}`)} className={cn("px-3 py-1.5 text-xs rounded-md text-left", h === hour ? "bg-slate-900 text-slate-50" : "hover:bg-slate-100")}>{hour}</button>)}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] uppercase text-slate-400 mb-2 font-bold text-center">Mins</span>
        <div className="h-48 overflow-y-auto custom-scrollbar flex flex-col gap-1 pr-2">
          {minutes.map(min => <button key={min} onClick={() => onChange(`${h}:${min}`)} className={cn("px-3 py-1.5 text-xs rounded-md text-left", m === min ? "bg-slate-900 text-slate-50" : "hover:bg-slate-100")}>{min}</button>)}
        </div>
      </div>
    </div>
  );
};

/**
 * Individual Task Item component with drag-and-drop, theme, and overdue support.
 */
const TaskItem: React.FC<any> = ({ task, index, overdue, isDragging, isDragOver, onDelete, onEdit, onToggle, onDragStart, onDragOver, onDragEnd, onDrop }) => {
  const isCrossedOut = overdue || task.completed; // Final visual state
  const theme = task.theme ? THEME_CONFIG[task.theme] : null; // Seasonal configuration

  return (
    <li 
      onDragOver={(e) => onDragOver(e, index)} onDrop={(e) => onDrop(e, index)} // Reordering hooks
      className={cn("task-list-item group relative rounded-xl px-2 py-5 flex items-start gap-2", isDragging && "dragging", isDragOver && "bg-slate-50/80 translate-y-1 shadow-sm", isCrossedOut ? 'opacity-30' : 'opacity-100', theme && !isCrossedOut && !isDragging && `${theme.bg} border border-transparent hover:border-slate-100`)}
    >
      <div draggable onDragStart={(e) => onDragStart(e, index)} onDragEnd={onDragEnd} className="cursor-grab p-2 mt-0.5 opacity-0 group-hover:opacity-30 transition-opacity hover:opacity-100 flex-shrink-0"><GripVertical className="h-4 w-4 text-slate-400" /></div>
      <div className="flex items-start gap-5 flex-grow min-w-0">
        <div className="mt-1 flex-shrink-0"><Checkbox checked={task.completed} onChange={() => onToggle(task.id)} themeColor={theme?.checkboxColor} borderColor={theme?.checkboxBorder} /></div>
        <div className={cn("flex-grow transition-all duration-500 min-w-0 flex flex-col", isCrossedOut ? "translate-x-1" : "translate-x-0")}>
          <div className="flex items-start gap-2.5 w-full">
            {theme && !isCrossedOut && <span className={cn("flex-shrink-0 mt-[4px] opacity-80 group-hover:opacity-100 transition-opacity text-sm", theme.animationClass)}>{theme.emoji}</span>}
            <p className={cn("text-[17px] font-light tracking-tight transition-all duration-500 break-words leading-relaxed flex-1", isCrossedOut ? 'line-through text-slate-400' : 'text-slate-800')}>{task.description}</p>
          </div>
          <div className="flex items-center gap-3 mt-1.5 overflow-hidden flex-wrap">
            <span className="text-[10px] uppercase tracking-[0.15em] text-slate-300 font-bold">{format(parse(task.date, 'yyyy-MM-dd', new Date()), 'MMM d')}</span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-slate-300 font-bold">at {task.time}</span>
            {task.completed && !overdue && <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-400 font-black px-1.5 py-0.5 bg-emerald-50 rounded-sm">Completed</span>}
            {overdue && <span className="text-[9px] uppercase tracking-[0.2em] text-rose-400 font-black px-1.5 py-0.5 bg-rose-50 rounded-sm">Past Due</span>}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-200 pr-4 mt-1.5 flex-shrink-0">
        <button onClick={() => onEdit(task)} className="text-[10px] uppercase text-slate-400 hover:text-slate-900 font-bold">Edit</button>
        <button onClick={() => onDelete(task.id)} className="text-[10px] uppercase text-slate-400 hover:text-rose-600 font-bold">Delete</button>
      </div>
    </li>
  );
};

// --- Main Application Root ---

const App: React.FC = () => {
  // Initialize state from LocalStorage or empty array
  const [tasks, setTasks] = useState<Task[]>(() => {
    try { const saved = localStorage.getItem('minimal_tasks'); return saved ? JSON.parse(saved) : []; } 
    catch { return []; }
  });
  
  // Form and UI state
  const [description, setDescription] = useState(''); // Current description being typed
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date()); // Selected due date
  const [selectedTime, setSelectedTime] = useState<string>(format(new Date(), 'HH:mm')); // Selected due time
  const [editingId, setEditingId] = useState<string | null>(null); // ID of task being edited
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); // Popover state
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false); // Popover state
  const [now, setNow] = useState(new Date()); // Current time ticker
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null); // Reordering state
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null); // Reordering state

  // Persist tasks to LocalStorage on change
  useEffect(() => { localStorage.setItem('minimal_tasks', JSON.stringify(tasks)); }, [tasks]);

  // Update "now" every second for live overdue tracking
  useEffect(() => { const i = setInterval(() => setNow(new Date()), 1000); return () => clearInterval(i); }, []);

  /**
   * Add new task or update existing one.
   */
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    if (!description || !selectedDate || !selectedTime) return; // Validation
    const dateStr = format(selectedDate, 'yyyy-MM-dd'); // Format for storage
    const theme = getTaskTheme(description); // Calculate theme
    if (editingId) {
      setTasks(prev => prev.map(t => t.id === editingId ? { ...t, description, date: dateStr, time: selectedTime, theme } : t));
      setEditingId(null);
    } else {
      setTasks(prev => [...prev, { id: crypto.randomUUID(), description, date: dateStr, time: selectedTime, completed: false, theme }]);
    }
    setDescription(''); setSelectedDate(new Date()); setSelectedTime(format(new Date(), 'HH:mm')); // Reset form
  };

  /**
   * Helper to check if a task is past its due time.
   */
  const isOverdue = useCallback((task: Task) => new Date(`${task.date}T${task.time}`) < now, [now]);

  // Drag and Drop Logic Handlers
  const handleDragStart = (e: React.DragEvent, index: number) => { setDraggedIndex(index); e.dataTransfer.effectAllowed = 'move'; };
  const handleDragOver = (e: React.DragEvent, index: number) => { e.preventDefault(); if (dragOverIndex !== index) setDragOverIndex(index); };
  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault(); if (draggedIndex === null || draggedIndex === dropIndex) return;
    const newTasks = [...tasks]; const [moved] = newTasks.splice(draggedIndex, 1);
    newTasks.splice(dropIndex, 0, moved); setTasks(newTasks);
    setDraggedIndex(null); setDragOverIndex(null);
  };

  const inputClasses = "w-full bg-transparent border-b border-slate-200 py-2.5 px-1 focus:outline-none focus:border-slate-500 transition-colors font-light text-base text-left flex items-center";

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <header className="mb-16 text-left">
        <h1 className="text-4xl font-light tracking-tight text-slate-900 mb-2">To-Do List</h1>
        <p className="text-sm text-slate-400 font-light max-w-2xl leading-relaxed">A simple space for your tasks that celebrates the little seasonal moments.</p>
      </header>

      <section className="mb-20">
        <form onSubmit={handleAddTask} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-8 items-end">
          <div className="sm:col-span-2 lg:col-span-5">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-semibold">Task</label>
            <input type="text" placeholder={PLACEHOLDER_TEXT} value={description} onChange={(e) => setDescription(e.target.value)} className={inputClasses} required />
          </div>
          <div className="sm:col-span-1 lg:col-span-3">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-semibold">Date</label>
            <Popover isOpen={isDatePickerOpen} onClose={() => setIsDatePickerOpen(false)} trigger={<button type="button" onClick={() => setIsDatePickerOpen(!isDatePickerOpen)} className={cn(inputClasses, !selectedDate ? "text-slate-300" : "text-slate-800")}><CalendarIcon className="mr-2 h-4 w-4 opacity-50" /><span>{selectedDate ? format(selectedDate, "MMM d, yyyy") : "Set Date"}</span></button>}><Calendar value={selectedDate} onChange={(d: any) => { setSelectedDate(d); setIsDatePickerOpen(false); }} /></Popover>
          </div>
          <div className="sm:col-span-1 lg:col-span-2">
            <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-semibold">Time</label>
            <Popover isOpen={isTimePickerOpen} onClose={() => setIsTimePickerOpen(false)} trigger={<button type="button" onClick={() => setIsTimePickerOpen(!isTimePickerOpen)} className={cn(inputClasses, !selectedTime ? "text-slate-300" : "text-slate-800")}><Clock className="mr-2 h-4 w-4 opacity-50" /><span>{selectedTime || "Set Time"}</span></button>}><TimePicker value={selectedTime || '12:00'} onChange={(t: any) => { setSelectedTime(t); setIsTimePickerOpen(false); }} /></Popover>
          </div>
          <div className="sm:col-span-2 lg:col-span-2 flex justify-end">
            <Button type="submit" className="w-full h-12 text-[10px] uppercase tracking-widest font-bold">{editingId ? 'Update' : 'Add Task'}</Button>
          </div>
        </form>
      </section>

      <main>
        {tasks.length === 0 ? <div className="text-slate-300 italic text-center py-24 border-t border-slate-50">Your list is empty.</div> : (
          <ul className="flex flex-col">
            {tasks.map((task, index) => {
              const showDivider = index === 0 || task.date !== tasks[index - 1].date; // Logical separation of days
              return (
                <React.Fragment key={task.id}>
                  {showDivider && <div className="flex items-center gap-4 pt-12 pb-4"><span className="text-[10px] uppercase tracking-widest font-bold text-slate-300">{format(parse(task.date, 'yyyy-MM-dd', new Date()), 'EEEE, MMM d')}</span><div className="h-[1px] w-full bg-slate-100"></div></div>}
                  <TaskItem index={index} task={task} overdue={isOverdue(task)} isDragging={draggedIndex === index} isDragOver={dragOverIndex === index} onDelete={(id: any) => setTasks(prev => prev.filter(t => t.id !== id))} onEdit={(t: any) => { setEditingId(t.id); setDescription(t.description); setSelectedDate(parse(t.date, 'yyyy-MM-dd', new Date())); setSelectedTime(t.time); window.scrollTo({ top: 0, behavior: 'smooth' }); }} onToggle={(id: any) => setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={() => { setDraggedIndex(null); setDragOverIndex(null); }} onDrop={handleDrop} />
                </React.Fragment>
              );
            })}
          </ul>
        )}
      </main>

      <footer className="mt-32 pb-20 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-300 font-medium">stop checking out my bottom</span>
      </footer>
    </div>
  );
};

export default App;
