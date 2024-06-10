import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todo, delBtn }) => {
  return (
    <div className={styles.itemsContainer}>
      {todo.map((item) => (
        <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} delBtn = {delBtn}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;