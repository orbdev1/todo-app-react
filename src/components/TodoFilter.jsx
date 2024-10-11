import styles from '../styles/TodoFilter.module.css'

export function TodoFilter ({ filter, setFilter }) {
  

  return (
    <div className={styles.containerFilter}>
      <label>
        <input
          type="radio"
          value="all"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        />
        Todos
      </label>
      <label>
        <input
          type="radio"
          value="completed"
          checked={filter === "completed"}
          onChange={() => setFilter("completed")}
        />
        Completados
      </label>
      <label>
        <input
          type="radio"
          value="incomplete"
          checked={filter === "incomplete"}
          onChange={() => setFilter("incomplete")}
        />
        Pendientes
      </label>
    </div>
  )
}