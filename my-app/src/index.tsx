import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './themeContext';  // Import the ThemeProvider
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
   );
} else {
  console.error('Root element not found');
}

// ReactDOM.render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById('root')
// );
