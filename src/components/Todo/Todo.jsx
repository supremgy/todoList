import { FaTrashAlt } from "react-icons/fa";
import React from "react";
import styles from "./Todo.module.css";

export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, text, status } = todo;
  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={status === "completed"}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
