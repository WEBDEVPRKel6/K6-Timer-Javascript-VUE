<template>
  <div class="stopwatch-item-modal gradient" v-if="modalOpen === true">
    <div class="mb4">
      <h1>{{ title }}</h1>
    </div>
    <div class="circle mb4 flex-center">
      <h1>{{ displayTime }}</h1>
    </div>
    <div class="mb4">
      <transition name="fade" mode="out-in">
        <button class="mlr1" v-if="!running" @click="handleStart" key="start">
          {{ time > 0 ? "Continue" : "Start" }}
        </button>
        <button class="mlr1" v-if="running" @click="handlePause" key="pause">
          Pause
        </button>
      </transition>
      <button class="mlr1" @click="handleStop" key="stop">Stop</button>
      <button class="mlr1 danger-red" @click="handleDelete(id)" key="delete">Delete</button>
    </div>
    <button @click="modalOpen = !modalOpen" class="close-btn-modal box-shadow bold">
      &#10005;
    </button>
  </div>
</template>

<script>
export default {
  name: "StopwatchListItemModal",
  props: {
    id: Number,
    modalOpen: Boolean,
    title: String,
    displayTime: String,
    time: Number,
    handleStart: Function,
    handlePause: Function,
    handleDelete: Function,
    handleStop: Function,
    running: Boolean,
  },
};
</script>

<style scoped>

.stopwatch-item-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
}

.circle {
  background: white;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
}

.close-btn-modal {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 25px;
  right: 25px;
  border: none;
  border-radius: 50%;
  padding: 0;
}

</style>