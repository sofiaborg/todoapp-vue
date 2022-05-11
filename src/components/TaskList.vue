<template>
  <div>
    <AddTask @addTask="addTask($event)" /><TaskSingle
      @deleteBtn="deleteBtn($event)"
      @statusToggle="statusToggle($event)"
      v-for="(t, i) in allTasks"
      :key="i"
      :task="t"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import TaskSingle from "./TaskSingle.vue";
import AddTask from "./AddTask.vue";
import { Todos } from "../models/Todos";

//variable for local storage
const LS_KEY = "todo-storage";

@Options({
  components: {
    TaskSingle,
    AddTask,
  },
})
export default class TaskList extends Vue {
  //use local storage to show created todos
  created() {
    this.allTasks = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
  }

  //empty todo-array from start
  allTasks: Todos[] = [];

  //add todo
  addTask(added: string) {
    //lägg in unikt id istället för 1 sen!!
    let newTask = new Todos(added, 1);
    this.allTasks.push(newTask);
    localStorage.setItem(LS_KEY, JSON.stringify(this.allTasks));
  }

  //delete todo
  deleteBtn(deleted: Todos) {
    this.allTasks.splice(this.allTasks.indexOf(deleted), 1);
    localStorage.setItem(LS_KEY, JSON.stringify(this.allTasks));
  }

  //change todo-status
  statusToggle(status: boolean) {
    status = !status;
    localStorage.setItem(LS_KEY, JSON.stringify(this.allTasks));
    console.log(status);
  }
}
</script>

<style lang="scss" scoped></style>
