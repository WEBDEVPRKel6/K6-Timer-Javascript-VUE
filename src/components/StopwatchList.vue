<template>
  <div class="container">
    <div class="mb2">
      <button class="reset-btn box-shadow">Reset All</button>
    </div>
    <div class="mb2">
      <div class="form">
        <input class="box-shadow" id="stopwatch-title-form" v-model="stopwatchTitleInput" type="text" placeholder="Title" />
        <button class="gradient box-shadow" @click="addStopwatch()">+</button>
      </div>
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
  },
  methods: {
    addStopwatch: async function() {
      const newStopwatch = document.createElement("stop-watch");
      newStopwatch.title = this.stopwatchTitleInput;

      let data = {
        title: this.stopwatchTitleInput,
        time: 0,
        running: false,
        date: new Date(),
      };

      const resData = await axios.post(`http://localhost:3000/stopwatch`, data);
      
      //Pindah Kebawah, biar dapet id stopwatch baru dari DB
      this.stopwatches.stopwatchIds.push(resData.data.response.id);
      
      newStopwatch.clockId = resData.data.response.id;
      newStopwatch.setAttribute("id", `stopwatch-${resData.data.response.id}`);

      this.stopwatches.insertBefore(newStopwatch, this.titleForm);
      this.stopwatchTitleInput = "";
    }
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

.form {
  width: 100%;
  display: flex;
}

.form input {
  width: 70%;
  margin-right: 1rem;
  text-align: center;
  color: #9E9E9E;
}

.form button {
  width: 30%;
}

.form input, form button {
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