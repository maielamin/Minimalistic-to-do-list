
/**
 * Defines the possible seasonal or category themes for a task.
 * These are triggered by keywords in the task description.
 */
export type TaskTheme = 
  | 'valentine' 
  | 'ramadan' 
  | 'easter' 
  | 'carnival' 
  | 'halloween' 
  | 'christmas' 
  | 'summer' 
  | 'autumn' 
  | 'fitness';

/**
 * Represents the structure of a single task item in the application.
 */
export interface Task {
  id: string; // Unique identifier (UUID)
  description: string; // The text content of the task
  date: string; // Due date in YYYY-MM-DD format
  time: string; // Due time in HH:mm format
  completed: boolean; // Manual completion status
  theme?: TaskTheme | null; // Calculated theme based on keywords
}
