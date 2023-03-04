import React from 'react';
import '../components/todo.css';

function Todo() {
  return (
    <>
      <div className='container'>
        <h1>Todo List 📃</h1>
        <div className='todo-add'>
        <input placeholder='Ex. Buy groceries'></input>
        <button>➕</button>
        </div>
        <div className='todo-list'>
          
          <div className='todo-items'>
            <p>Hello World</p>
            <button>Delete</button>
          </div>
          <div className='todo-items'>
            <p>Hello World</p>
            <button>Delete</button>
          </div>

        </div>
        <button className='delete-all'>Delete all ❌</button>
      </div>
    </>
  );
}

export default Todo;
