<template>
  <div id="app">
    <StopwatchList />
  </div>
</template>

<script>
import StopwatchList from "./components/StopwatchList.vue";

export default {
  name: "App",
  components: {
    StopwatchList,
  },
};
</script>

<style>
:root {
  --danger-red: #db7074;
}

body,
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
  background: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  font-family: "Roboto", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.301) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  color: #3c4f6f;
}

.danger-red {
  color: var(--danger-red);
}

.mb1 {
  margin-bottom: 1rem;
}

.mb2 {
  margin-bottom: 2rem;
}

.mb4 {
  margin-bottom: 4rem;
}

.mlr1 {
  margin: 0 1rem;
}

.bold {
  font-weight: 700;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.301) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.gradient {
  background: rgb(105, 144, 175);
  background: -moz-linear-gradient(
    90deg,
    rgba(105, 144, 175, 1) 0%,
    rgba(107, 152, 173, 1) 35%,
    rgba(113, 167, 177, 1) 70%,
    rgba(116, 178, 175, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(105, 144, 175, 1) 0%,
    rgba(107, 152, 173, 1) 35%,
    rgba(113, 167, 177, 1) 70%,
    rgba(116, 178, 175, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(105, 144, 175, 1) 0%,
    rgba(107, 152, 173, 1) 35%,
    rgba(113, 167, 177, 1) 70%,
    rgba(116, 178, 175, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6990af",endColorstr="#74b2af",GradientType=1);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Transition animations */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
