<template>
  <div class="title-wrapper">
    <h1>{{ appTitle }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
export default class Title extends Vue {
  @Prop() appTitle!: string;
}
</script>

<style lang="scss" scoped>
.title-wrapper {
  height: 10%;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 30pt;
    font-family: "League Script", cursive;
    padding-top: 30px;
    margin: 0px;
  }
}
</style>
