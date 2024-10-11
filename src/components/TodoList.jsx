import { TodoItem } from "./TodoItem";
import styles from '../styles/TodoList.module.css'

export function TodoList ({ todos, toggleTodo, deteleTodo, editTodo }) {
  return (
    <div className={styles.todoListContainer}>
      <ul>
        {todos.map((todo) => 
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deteleTodo={deteleTodo}
            editTodo={editTodo}
          />
        )}
      </ul>
    </div>
  )
}
