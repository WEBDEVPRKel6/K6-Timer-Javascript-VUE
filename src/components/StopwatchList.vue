<template>
  <div class="container">
    <div class="mb2">
      <button class="reset-btn box-shadow">Reset All</button>
    </div>
    <div class="mb2">
      <form>
        <input class="box-shadow" type="text" placeholder="Title" />
        <button class="gradient box-shadow" type="submit">+</button>
      </form>
    </div>
    <div>
      <StopwatchListItem :stopwatch="stopwatch" v-for="stopwatch in stopwatches" :key="stopwatch.id"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StopwatchListItem from './StopwatchListItem.vue'

export default {
  name: "StopwatchList",
  components: {
    StopwatchListItem
  },
  data() {
    return {
      stopwatches: [],
      stopwatchTitleInput: 'Untitled'
    }
  },
  created: async function() {
    const result = await axios.get('http://localhost:3000/stopwatch');
    this.stopwatches = result.data;
    console.log(this.stopwatches);
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

.reset-btn {
  padding: 0.4rem 2rem;
  background: #ffff;
  border: none;
  color: #DB7074;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
}

form {
  width: 100%;
  display: flex;
}

form input {
  width: 70%;
  margin-right: 1rem;
  text-align: center;
  color: #9E9E9E;
}

form button {
  width: 30%;
}

form input, form button {
  padding: 0.4rem 0.5rem;
  border: 0;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
}

@media (min-width:1080px) {
  .container {
    width: 40%;
  }
}
</style>