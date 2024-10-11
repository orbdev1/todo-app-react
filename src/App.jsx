import { useState } from 'react'
import './App.css'
import { FormTodo } from './components/FormTodo'
import { TodoList } from './components/TodoList'
import { TodoFilter } from './components/TodoFilter'

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Master JavaScript', completed: true }
]

function App() {
  const [todoList, setTodoList] = useState(initialTodos)
  const [filter, setFilter] = useState
  ('all')

  const filteredTodos = () => {
    if (filter === 'completed') return todoList.filter(todo => todo.completed)
    
    if (filter === 'incomplete') return todoList.filter(todo => !todo.completed)
    
    return todoList
  }

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }  
    setTodoList([...todoList, newTodo])
  }

  const toggleTodo = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deteleTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodoList(todoList.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }


  return (
    <>
      <div className='container'>
        <div className='container-title'>
          <h1>To Do App</h1>
        </div>
        <div className='container-app'>
          <FormTodo addTodo={addTodo} />
          <TodoFilter filter={filter} setFilter={setFilter}/>
          <TodoList
            todos={filteredTodos()}
            toggleTodo={toggleTodo}
            deteleTodo={deteleTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </>
  )
}

export default App
