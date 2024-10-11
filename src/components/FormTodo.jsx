import { useState } from 'react'
import styles from '../styles/FormTodo.module.css'


export function FormTodo ({ addTodo }) {
  const [value, setValue] = useState('')

  function handleClick() {
    addTodo(value);   // Llama a la función addTodo que viene de App
    setValue(''); 
  }
  
  return (
    <div className={styles.formContainer}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button className={styles.button} onClick={handleClick}>Agregar</button>
    </div>
  )
}
