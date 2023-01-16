import { useState, useEffect, useRef } from 'react'

function App() {
  const [containerStatus, updateContainerStatus] = useState(0);

  interface task {
    id: string,
    text: string,
    done: boolean
  }

  const initialState:task[] = [
    {
      id: "2132",
      text: "Example task",
      done: false
    },
    {
      id: "2137",
      text: "Example task2",
      done: true
    },
  ];

  const [taskList, updateTaskList] = useState<task[]>(initialState);
  const [currentText, updateCurrentText] = useState("");

  const textarea = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  useEffect(() => {
    updateContainerStatus(taskList.length);
  }, [taskList])

  const handleTextUpdate = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    updateCurrentText(event.target.value);
  }

  const handleClick = () => {
    if(currentText != "") {
      let id = new Date().getTime().toString();
      let task:task = {
        id: id,
        text: currentText,
        done: false
      };
      updateTaskList([...taskList, task]);
      updateCurrentText("");
    } else {
      textarea.current.placeholder="You need to write your task here!";
      textarea.current.style.border="1px solid red";
      setTimeout(()=> {
        textarea.current.placeholder="Write new task here:";
        textarea.current.style.border="1px solid gray";
      }, 2000)
    }
  }

  const handleDeleteAll = () => {
    updateTaskList([]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <main id="wrapper">
          <div id="container">
            {
              taskList.map((task) => {
                return <div id={task.id} className = 'task'>
                  <p style={{textDecoration: task.done ? "line-through" : "none"}}>{task.text}</p>
                  <div className="task__btns">
                    <input className="task__check" type="checkbox"/>
                    <button className="task__button">X</button>
                  </div>
                </div>
              })
            }
          </div>
          <div id="control-panel">
              <label id="control-panel__label" htmlFor="control-panel__controls">Add a new task to the list</label>
              <div id="control-panel__controls">
                  <textarea id="controls__textarea" placeholder="Write new task here:" value={currentText} onChange={handleTextUpdate} ref={textarea}/>
                  <button onClick={handleClick} id="controls__button">+</button>
              </div>
          </div>
      </main>
      <p id="container__status">
        You currently have {containerStatus} tasks.
      </p>
      <button id="delete-all" onClick = {handleDeleteAll}>Delete all tasks</button>
    </>
  )
}

export default App
