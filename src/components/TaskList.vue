<template>
  <div class="main-wrapper">
    <Title :appTitle="title" />
    <AddTask @addTask="handleAddTask($event)" />
    <TaskSort
      @sortStatus="handleSortStatus($event)"
      @sortCreated="handleSortCreated($event)"
    />

    <div class="tasklist-wrapper">
      <div class="tasks-true" v-if="allTasks.length > 0">
        <TaskSingle
          @deleteTask="handleDelete($event)"
          @toggleTaskStatus="handleToggle($event)"
          v-for="t in allTasks"
          :key="t.created"
          :task="t"
        />
      </div>
      <div class="tasks-false" v-else><h5>no tasks to do. add a new!</h5></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Title from "../components/Title.vue";
import TaskSingle from "./TaskSingle.vue";
import AddTask from "./AddTask.vue";
import { Todos } from "../models/Todos";
import TaskSort from "./TaskSort.vue";

//variable for local storage
const LS_KEY = "todo-storage";

@Options({
  components: {
    Title,
    TaskSingle,
    AddTask,
    TaskSort,
  },
})
export default class TaskList extends Vue {
  title = "Checklist";

  //use local storage to show created todos

  created() {
    this.allTasks = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
  }

  //empty todo-array from start
  allTasks: Todos[] = [];

  //add todo
  handleAddTask(added: Todos) {
    this.allTasks.push(added);
    localStorage.setItem(LS_KEY, JSON.stringify(this.allTasks));
  }

  //delete todo
  handleDelete(deleted: string) {
    let i = this.allTasks.map((task) => task.created).indexOf(deleted); // find index of the object
    this.allTasks.splice(i, 1); // remove it from array
    localStorage.setItem(LS_KEY, JSON.stringify(this.allTasks));
  }

  //change todo-status
  handleToggle(toggled: Todos) {
    toggled.status = !toggled.status;
    localStorage.setItem(LS_KEY, JSON.stringify(this.allTasks));
  }

  //sort by status
  handleSortStatus(sortedByStatus: string) {
    if (sortedByStatus == "done") {
      this.allTasks.sort(function (x, y) {
        return x.status === y.status ? 0 : x.status ? -1 : 1;
      });
    } else if (sortedByStatus === "undone") {
      this.allTasks.sort(function (x, y) {
        return x.status === y.status ? 0 : x.status ? 1 : -1;
      });
    }
  }

  //sort by created
  handleSortCreated(sortedByCreated: string) {
    if (sortedByCreated == "newest") {
      this.allTasks.sort((x, y) => +new Date(y.created) - +new Date(x.created));
    } else {
      console.log("nej");
    }
  }
}
</script>

<style lang="scss" scoped>
//mobile
.main-wrapper {
  height: 600px;
  width: 500px;
  border-radius: 20px;
  background: transparent;

  .tasklist-wrapper {
    padding-left: 115px;
    padding-right: 125px;
    height: 60%;
    overflow-y: auto;

    scroll-behavior: smooth;

    .tasks-false {
      font-size: 14pt;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
