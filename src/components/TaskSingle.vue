<template>
  <div class="tasksingle-wrapper">
    <h3>{{ task.title }}</h3>
    <button @click="deleteBtn">delete</button>
    <input type="checkbox" @click="statusToggle()" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Todos } from "../models/Todos";

export default class TaskSingle extends Vue {
  @Prop() task!: Todos;
  @Prop() status!: Todos;

  deleteBtn() {
    this.$emit("deleteBtn");
  }

  statusToggle() {
    this.$emit("statusToggle", this.task.status);
    console.log(this.task.status);
  }
}
</script>

<style lang="scss" scoped>
.tasksingle-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  h3 {
    margin: 0px;
    padding: 0px;
  }

  button {
    width: 50px;
    height: 20px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
