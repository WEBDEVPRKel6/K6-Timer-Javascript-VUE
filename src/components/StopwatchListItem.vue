<template>
  <div>
    <div class="stopwatch-item mb2 gradient">
      <div class="stopwatch-item-content" @click="modalOpen = true">
        <div class="mb1">
          <h4>{{ title }}</h4>
        </div>
        <div>
          <h1>{{ displayTime }}</h1>
        </div>
      </div>
      <div>
        <transition name="fade" mode="out-in">
          <button v-if="!running" @click="handleStart" key="start">
            {{ time > 0 ? "Continue" : "Start" }}
          </button>
          <button v-if="running" @click="handlePause" key="pause">Pause</button>
        </transition>
      </div>
      <button class="close-btn box-shadow bold">&#10005;</button>
    </div>
    <transition name="fade">
      <!-- Not yet component based, still a lotta bugs -->
      <div class="stopwatch-item-modal gradient" v-if="modalOpen">
        <div class="mb4">
          <h1>{{ title }}</h1>
        </div>
        <div class="circle mb4 flex-center">
          <h1>{{ displayTime }}</h1>
        </div>
        <div class="mb4">
          <transition name="fade" mode="out-in">
            <button
              class="mlr1"
              v-if="!running"
              @click="handleStart"
              key="start"
            >
              {{ time > 0 ? "Continue" : "Start" }}
            </button>
            <button
              class="mlr1"
              v-if="running"
              @click="handlePause"
              key="pause"
            >
              Pause
            </button>
          </transition>
          <button class="mlr1" @click="handleStart">Stop</button>
          <button class="mlr1 danger-red" @click="handleReset">Reset</button>
          <button class="mlr1 danger-red" @click="handleStart">Delete</button>
        </div>
        <button
          @click="modalOpen = false"
          class="close-btn-modal box-shadow bold"
        >
          <!-- its an X symbol -->
          &#10005;
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { updateData } from "../api/API";
import Time from "../utils/time";

export default {
  name: "StopwatchListItem",
  props: {
    stopwatch: Object,
  },
  data() {
    return {
      id: this.stopwatch.id,
      title: this.stopwatch.title,
      time: this.stopwatch.time,
      running: this.stopwatch.running,
      displayTime: Time.toHHMMSS(this.stopwatch.time),
      timerInterval: "",
      modalOpen: false,
      // pls fix
      timeDifference:
        (new Date().getTime() - new Date(this.stopwatch.date).getTime()) / 1000,
    };
  },
  methods: {
    handleStart() {
      this.running = true;
      this.timerInterval = setInterval(() => {
        this.time++;
        this.displayTime = Time.toHHMMSS(this.time);
      }, 1000);
    },
    handlePause() {
      this.running = false;
      console.log(this.running);
      clearInterval(this.timerInterval);
    },
    handleReset() {
      this.running = false;
      this.time = 0;
      clearInterval(this.timerInterval);
    },
    async beforeUnload() {
      const data = {
        title: this.title,
        time: this.time,
        date: new Date(),
        running: this.running,
      };

      await updateData(this.id, data);
    },
  },
  created() {
    // refresh/close is not counted as destroyed in vue, so here we are using beforeunload
    window.addEventListener("beforeunload", () => this.beforeUnload());

    if (this.running) {
      // idk why this doesn't work
      // this.time = this.time + this.timeDifference;
      this.handleStart();
    }
  },
};
</script>

<style scoped>
.stopwatch-item {
  width: 100%;
  min-height: 6rem;
  border-radius: 6px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.stopwatch-item-content {
  text-align: start;
}

.close-btn {
  position: absolute;
  width: 20px;
  height: 20px;
  top: -10px;
  right: -10px;
  border: none;
  border-radius: 50%;
  padding: 0;
}

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
