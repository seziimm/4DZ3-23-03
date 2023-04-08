import React from "react";
import styles from './todocard.module.css';

const TodoCard = ({ task, handleDelete }) => {
    return (
        <div className={styles.todoCard}>
            <p>{task.id}</p>
            <h5>{task.title}</h5>
            <h5>{task.task}</h5>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TodoCard;