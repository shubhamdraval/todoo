import React, { useState } from 'react';
import '../components/todo.css';

function Todo() {

  // Declaring new state varialbe to handle input value.
  const [todoAddInput, setTodoAddInput] = useState("");
  //Declaring a state variable to store list of todo items.
  const [todoItems, setTodoItems] = useState([]);

  //Declaring a function to handle add todo event.
  const addTodoItems = () => {
    if (todoAddInput) {
      setTodoItems([...todoItems, todoAddInput]);
      setTodoAddInput('');
    }
    //console.log(todoItems[0]);
  }

  //Declaring a function to hadle delete todo item event.
  const deleteTodoItem = (id) => {
    const updatedTodoItems = todoItems.filter((value, index) => {
      return index !== id;
    });
    setTodoItems(updatedTodoItems);
  }

  //Declaring a function to hadle delete all todo item event.
  const deleteAllTodoItems = () => {
    setTodoItems([]);
  }

  return (
    <>
      <div className='container'>
        <h1>Todo List 📃</h1>
        <div className='todo-add'>
          <input placeholder='Ex. Buy groceries'
            value={todoAddInput}
            onChange={(e) => setTodoAddInput(e.target.value)}></input>
          <button
            onClick={addTodoItems}
          >➕</button>
        </div>
        <div className='todo-list'>
          {
            todoItems.map((value, index) => {
              return (
                <div className='todo-items' key={index}>
                  <p>{value + "  " + index}</p>
                  <button
                    onClick={() => deleteTodoItem(index)}
                  >Delete</button>
                </div>
              )
            })
          }
        </div>
        <button className='delete-all'
          onClick={deleteAllTodoItems}
        >Delete all ❌</button>
      </div>
    </>
  );
}

export default Todo;
