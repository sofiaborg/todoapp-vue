<template>
  <div class="addtask-wrapper">
    <form @submit.prevent="addTodo">
      <p class="minimumChar">{{ minimumChar }}</p>
      <input v-model="task" type="text" placeholder="..." />

      <button @click="handleClick">+</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Todos } from "../models/Todos";
import { Vue } from "vue-class-component";

export default class AddTask extends Vue {
  task = "";
  minimumChar = "";

  handleClick() {
    if (this.task.length > 0 && this.task.length <= 15) {
      this.$emit("addTask", new Todos(this.task));
      this.task = "";
      this.minimumChar = "";
    } else if (this.task.length > 15) {
      this.minimumChar = "task can be max 15 characters!";
    } else {
      this.minimumChar = "you need to write something!";
    }
  }
}
</script>

<style lang="scss" scoped>
.addtask-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;

  form {
    .minimumChar {
      font-size: 8pt;
      padding-left: 50px;
      color: #e3512c;
    }
    input {
      width: 200px;
      height: 40px;
      padding-left: 10px;
      border: none;

      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    button {
      width: 42px;
      height: 42px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
