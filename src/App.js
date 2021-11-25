
import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(["Learn react", "Sign up for Shehacks"]);
  const [text, setText] = useState('');

  const onHandleClear = () => {
    setTodos([]);
  }

  const onHandleAdd = (task) => {
    setTodos(prevTodos => {
      return [...prevTodos, task]
    })
    setText('');
  }

  const onChangeText = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      {/* <TodoList></TodoList> */}
      <input type="text" onChange={onChangeText} value={text}/>
      <button  onClick={e => onHandleAdd(text)}>Add</button>
      <button onClick={onHandleClear}>Clear all</button>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
