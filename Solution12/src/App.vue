<script setup lang="ts">

interface task {
    id: string,
    text: string,
    done: boolean
  }

let taskString = localStorage.getItem("tasks");
if(!taskString) {
    taskString = ""
}

const initialState = JSON.parse(taskString);

const tasks:task[] = initialState;

const count = tasks.length;

console.log(tasks);

</script>

<template>
  <h1>To Do List</h1>
  <main id="wrapper">
      <div id="container"> 
        <div 
        v-for="(task) in tasks" 
        v-bind:id="task.id" 
        class="task"
        >
          <p>{{task.text}}</p>
          <div class="task__btns">
            <input class="task__check" type="checkbox"/>
            <button class="task__button">X</button>
          </div>
        </div>
      </div>
      <div id="control-panel">
          <label id="control-panel__label" htmlFor="control-panel__controls">
            Add a new task to the list
          </label>
          <div id="control-panel__controls">
            <textarea 
            id="controls__textarea" placeholder="Write new task here:" autoFocus
            />
            <button id="controls__button">+</button>
          </div>
      </div>
  </main>
  <p id="container__status">
    You currently have {{count}} tasks.
  </p>
  <button id="delete-all">Delete all tasks</button>
</template>
