import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  const [todoItem, setTodoItem] = useState(todoItems);

  const addTodo = (newTodoName, newTodoDate) => {
    const addNewTodo = [...todoItem, 
      {
        name: newTodoName,
        dueDate: newTodoDate
      }
    ]
    // console.log(`new todo name: ${newTodoName} date: ${newTodoDate}`);
    setTodoItem(addNewTodo);
  }

  const deleteTodo = (todoName) => {
    // console.log(`${todoName}`);
    const delTodo = todoItem.filter(item => item.name !== todoName)
    setTodoItem(delTodo);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo  addBtn = {addTodo}/>
      <WelcomeMessage todoItem = {todoItem}></WelcomeMessage>
      <TodoItems todo = {todoItem} delBtn = {deleteTodo}></TodoItems>
    </center>
  );
}

export default App;