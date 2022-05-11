<template>
  <div class="addtask-wrapper">
    <form @submit.prevent="addTask">
      <input v-model="task" type="text" placeholder="..." />
      <button>add</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class AddTask extends Vue {
  task = "";

  addTask() {
    this.$emit("addTask", this.task);
  }
}
</script>

<style lang="scss" scoped>
.addtask-wrapper {
  padding: 40px;
}
</style>
