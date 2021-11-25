
import React from 'react';
import TodoList from './components/TodoItem';

function App() {
  return (
    <div className="App">
      {/* <TodoList></TodoList> */}
      <TodoList />
      <input type="text" value="placeholder"/>
      <button>Add</button>
      <button>Clear all</button>
    </div>
  );
}

export default App;
