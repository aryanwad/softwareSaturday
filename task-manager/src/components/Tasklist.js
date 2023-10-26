import React from 'react';
import Task from './Task';

function TaskList({ tasks, markAsCompleted, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          markAsCompleted={markAsCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;