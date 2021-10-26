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
      <button>Start</button>
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
      displayTime: Time.toHHMMSS(this.stopwatch.time)
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