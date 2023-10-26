import React from 'react';

function Task({ task, markAsCompleted, deleteTask }) {
  const { id, name, dueDate, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span className="task-name">{name}</span>
      {dueDate && <span className="due-date">Due: {dueDate}</span>}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => markAsCompleted(id)}
      />
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
}

export default Task;