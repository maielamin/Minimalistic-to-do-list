
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for client-side rendering
import App from './App'; // Import the main App component

// Retrieve the root element from the DOM
const rootElement = document.getElementById('root');

// Ensure the root element exists before proceeding
if (!rootElement) {
  throw new Error("Could not find root element to mount to"); // Error handling for missing mount point
}

// Create a React root for the application
const root = ReactDOM.createRoot(rootElement);

// Render the application within StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
