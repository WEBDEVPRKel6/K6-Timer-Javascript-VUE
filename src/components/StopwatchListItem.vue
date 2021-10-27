<template>
  <div class="stopwatch-item mb2 gradient">
    <div class="stopwatch-item-content">
      <div class="mb1">
        <h4> {{ title }} </h4>
      </div>
      <div>
        <h1> {{ displayTime }} </h1>
      </div>
<<<<<<< Updated upstream
    </div>
    <div>
      <button v-if="!running" @click="handleStart"> {{ time > 0 ? 'Continue' : 'Start' }} </button>
      <button v-if="running" @click="handlePause"> Pause </button>
    </div>
    <button class="close-btn box-shadow bold">&#10005;</button>
=======
      <button class="close-btn box-shadow bold" @click="handleDelete(id)">&#10005;</button>
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
          <button class="mlr1 danger-red" @click="handleDelete(this.id)">Delete</button>
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
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
import Time from '../utils/time';
=======
import { updateData, deleteStopwatch } from "../api/API";
import Time from "../utils/time";
>>>>>>> Stashed changes

export default {
  name: 'StopwatchListItem',
  props: {
    stopwatch: Object
  },
  data() {
    return {
      id: this.stopwatch.id,
      title: this.stopwatch.title,
      time: this.stopwatch.time,
      running: this.stopwatch.running,
      displayTime: Time.toHHMMSS(this.stopwatch.time),
      timerInterval: '',
    }
  },
  methods: {
    handleStart: function() {
      this.running = true;
      this.timerInterval = setInterval(() => {
        this.time++;
        this.displayTime = Time.toHHMMSS(this.time);
      }, 1000);
    },
    handlePause: function() {
      this.running = false;
      clearInterval(this.timerInterval);
<<<<<<< Updated upstream
=======
    },
    handleDelete: async function(id){
      var r = confirm("Anda yakin menghapus stopwatch : " + this.title);
      if (r == true) {
        this.handlePause();
        await deleteStopwatch(id);
        // destroy the vue listeners, etc
        this.$destroy();

        // remove the element from the DOM 
        this.$el.parentNode.removeChild(this.$el);
      }
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
>>>>>>> Stashed changes
    }
  }
}
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
</style>