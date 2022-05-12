<template>
  <div><TaskList /></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TaskList from "./components/TaskList.vue";

@Options({
  components: {
    TaskList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  #app {
    background-image: url("./assets/mobileBg.svg");
    height: 100vh;
    font-family: "Inconsolata", monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }
  @media screen and (min-width: 640px) {
    html,
    body {
      #app {
        background-image: url("./assets/laptopBg.svg");
        .main-wrapper {
          background: rgba(242, 243, 245, 1);
        }
      }
    }

    @media screen and (min-width: 1024px) {
      html,
      body {
        #app {
          background-image: url("./assets/desktopBg.svg");
          .main-wrapper {
            background: rgba(242, 243, 245, 1);
            width: 600px;
            height: 600px;

            .tasklist-wrapper {
              padding-right: 180px;
              padding-left: 165px;
            }
          }
        }
      }
    }
  }
}
</style>
