.
<template>
  <div class="sort-wrapper">
    <div class="sortDiv">
      <h6>status</h6>
      <select name="status" @change="sortStatus($event)">
        <option value="done">done</option>
        <option value="undone">undone</option>
      </select>
    </div>

    <div class="sortDiv">
      <h6>created</h6>
      <select name="created" @change="sortCreated($event)">
        <option value="newest">newest</option>
        <option value="oldest">oldest</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Todos } from "../models/Todos";

export default class TaskSort extends Vue {
  @Prop() task!: Todos;

  sortStatus(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.$emit("sortStatus", target.value);
  }

  sortCreated(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.$emit("sortCreated", target.value);
  }
}
</script>

<style lang="scss" scoped>
.sort-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 10%;

  .sortDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    select {
      background: none;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
