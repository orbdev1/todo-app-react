  import { useState } from "react";
  import styles from '../styles/TodoItem.module.css'

  export function TodoItem({ todo, toggleTodo, deteleTodo, editTodo }) {

    const [isEditing, setIsEditing] = useState(false)
    const [newText, setNewText] = useState(todo.text)

    const handleEdit = () => {
      editTodo(todo.id, newText)
      setIsEditing(false)
    }

    return (
      <li className={styles.itemTodo}>
        {isEditing ?
        (
          <>
          <div className={styles.todoText}>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={()=> toggleTodo(todo.id)}
          />
          <input
            type="text" 
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          </div>
          <div className={styles.todoActions}>
            <button className={styles.save} onClick={handleEdit}>Guardar</button>
            <button className={styles.cancel} onClick={() => setIsEditing(false)}>Cancelar</button>
          </div>
          </>
        ) : (
          <>
            <div className={styles.todoText}>
              <input
              type="checkbox"
              checked={todo.completed}
              onChange={()=> toggleTodo(todo.id)}
              />
              <p>{todo.text}</p>
            </div>
            <div className={styles.todoActions}>
              <button className={styles.edit} onClick={() => setIsEditing(true)}>Editar</button>
              <button className={styles.delete} onClick={() => deteleTodo(todo.id)}>Borrar</button>
            </div>
        </ >
          )}
          
      </li>
    );
  }