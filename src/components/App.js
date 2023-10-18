
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [task, setTask] = useState('')
  const [newTask, addTask] = useState([])

  function deleteTask(index) {

    addTask(newTask.filter((_value, pos) => pos !== index))

  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <input type='text' onChange={(event) => setTask(event.target.value)} />
      <button onClick={() => addTask([...newTask, task])}>Add Todo</button>
      <ul>
        {newTask.map((t, index) => 
          <><li>{t}</li><button onClick={() => deleteTask(index)}>Delete</button></>
        )}
      </ul>

    </div>
  )
}

export default App
