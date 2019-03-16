import React from 'react';
import LibraryLayout from './components/LibraryLayout/LibraryLayout';
import './App.css';

const App = ({ webPort }) => {
  console.log({ webPort });
  return <LibraryLayout />;
};

export default App;
