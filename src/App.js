import React from "react";

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input type="text" placeholder="Add a new task" />
        <button>Add Task</button>
      </div>
      <div className="sort-container">
        <label>Sort by: </label>
        <select>
          <option value="alphabetical">Alphabetical</option>
          <option value="byTime">By Time</option>
        </select>
      </div>
    </div>
  );
}

export default App;
