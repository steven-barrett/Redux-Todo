import React from 'react';
import { createStore } from 'redux';
import reducer from './reducers';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        TEST
      </header>
      <TodoList />
    </div>
  );
}

export default App;
