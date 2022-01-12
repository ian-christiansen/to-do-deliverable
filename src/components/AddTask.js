import React from 'react';

export default function AddTask({ newTask, setNewTask, handleSubmit }) {
  return (
    <div>
      <form className="add-task" onSubmit={handleSubmit}>
        <div className="form-controls">
          <label>add task: </label>
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={handleSubmit}>add task</button>
        </div>
      </form>
    </div>
  );
}
