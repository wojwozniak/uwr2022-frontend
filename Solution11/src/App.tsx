import { useState } from 'react'

function App() {
  

  return (
    <>
      <h1>To Do List</h1>
      <main id="wrapper">
          <div id="container"></div>
          <div id="control-panel">
              <label id="control-panel__label" htmlFor="control-panel__controls">Add a new task to the list</label>
              <div id="control-panel__controls">
                  <textarea id="controls__textarea" placeholder="Write new task here:"></textarea>
                  <button id="controls__button">+</button>
              </div>
          </div>
      </main>
      <p id="container__status"></p>
      <button id="delete-all">Delete all tasks</button>
    </>
  )
}

export default App
