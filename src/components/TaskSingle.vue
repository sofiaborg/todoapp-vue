<template>
  <div class="tasksingle-wrapper">
    <ul>
      <li>
        <h3 :class="[{ linethrough: task.status }]">{{ task.title }}</h3>
        <div class="actionBtns">
          <input
            type="checkbox"
            @click="toggleTaskStatus"
            :checked="task.status"
          />
          <font-awesome-icon class="delete" icon="trash" @click="deleteTask" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Todos } from "../models/Todos";

export default class TaskSingle extends Vue {
  @Prop() task!: Todos;

  deleteTask() {
    this.$emit("deleteTask", this.task.created);
  }

  toggleTaskStatus() {
    this.$emit("toggleTaskStatus", this.task);
  }
}
</script>

<style lang="scss" scoped>
.tasksingle-wrapper {
  padding-top: 10px;
  ul {
    padding: 0px;
    margin: 0px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        margin: 0px;
        padding: 5px;
      }
      .linethrough {
        text-decoration: line-through;
      }
      .actionBtns {
        input {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          &:hover {
            cursor: pointer;
          }
        }
        .delete {
          padding-left: 10px;
          color: #d25839;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
