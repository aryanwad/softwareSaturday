import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (taskName) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        dueDate: dueDate || '',
        completed: false,
      };
      addTask(newTask);
      setTaskName('');
      setDueDate('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Due Date (optional)"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
