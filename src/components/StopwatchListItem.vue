<template>
  <div class="stopwatch-item mb2 gradient">
    <div class="stopwatch-item-content">
      <div class="mb1">
        <h4> {{ title }} </h4>
      </div>
      <div>
        <h1> {{ displayTime }} </h1>
      </div>
    </div>
    <div>
      <button v-if="!running" @click="handleStart"> {{ time > 0 ? 'Continue' : 'Start' }} </button>
      <button v-if="running" @click="handlePause"> Pause </button>
    </div>
    <button class="close-btn box-shadow bold">&#10005;</button>
  </div>
</template>

<script>
import Time from '../utils/time';

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