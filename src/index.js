import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RecipeContextProvider from './components/RecipeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecipeContextProvider>
    <App />
  </RecipeContextProvider>
);
