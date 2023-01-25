<script lang="ts">
// Main store
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

// Count at the bottom
const count = tasks.length;

export default {
    data() {
        return {
            count: tasks.length,
            tasks: initialState,
            text: ""
        }
    },
    methods: {
        clear() {
            this.tasks.length = 0;
            this.count = 0;
        },
        input(id:string) {
            this.tasks.map(task => {
                if(task.id == id) {
                    task.done = !task.done;
                }
            });
        },
        add() {
            
        }
    }
}
</script>

<template>
  <main id="wrapper">
      <div id="container"> 
        <div 
        v-for="(task) in tasks" 
        v-bind:id="task.id" 
        class="task"
        :key="task.id"
        >
          <p :class="task.done ? 'task--crossed' : ''">
            {{task.text}}
          </p>
          <div class="task__btns">
            <input class="task__check" type="checkbox" v-model="task.done" @click="input(task.id)"/>
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
            v-model="text"
            />
            <button id="controls__button" @click="add">+</button>
          </div>
      </div>
  </main>
  <p id="container__status">
    You currently have {{count}} tasks.
  </p>
  <button @click="clear" id="delete-all">Delete all tasks</button>
</template>
