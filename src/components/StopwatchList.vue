<template>
  <div class="container">
    <div class="mb2">
      <button class="reset-btn box-shadow">Reset All</button>
    </div>
    <div class="mb2">
      <div class="form">
<<<<<<< Updated upstream
        <input class="box-shadow" id="stopwatch-title-form" v-model="stopwatchTitleInput" type="text" placeholder="Title" />
        <button class="gradient box-shadow" @click="addStopwatch()">+</button>
      </div>
    </div>
    <div>
      <StopwatchListItem :stopwatch="stopwatch" v-for="stopwatch in stopwatches" :key="stopwatch.id"/>
=======
        <input class="box-shadow" v-model="titleText" type="text" placeholder="Title" />
        <button class="gradient box-shadow" @click="tambahStopwatch">+</button>
      </div>
>>>>>>> Stashed changes
    </div>
  </div>
</template>

<script>
<<<<<<< Updated upstream
import axios from 'axios';
import StopwatchListItem from './StopwatchListItem.vue'
=======
import StopwatchListItem from "./StopwatchListItem.vue";
import { fetchData, addStopwatch } from "../api/API";
>>>>>>> Stashed changes

export default {
  name: "StopwatchList",
  components: {
    StopwatchListItem
  },
  data() {
    return {
      stopwatches: [],
<<<<<<< Updated upstream
      stopwatchTitleInput: 'Untitled'
    }
=======
      stopwatchTitleInput: "Untitled",
      titleText: "",
      // StopwatchList buat list data Stopwatch delete tanpa relod
      stopwatchList: []
    };
>>>>>>> Stashed changes
  },
  created: async function() {
    const result = await axios.get('http://localhost:3000/stopwatch');
    this.stopwatches = result.data;
<<<<<<< Updated upstream
    console.log(this.stopwatches);
  },
  methods: {
    addStopwatch: async function() {
      const newStopwatch = document.createElement("stop-watch");
      newStopwatch.title = this.stopwatchTitleInput;

      let data = {
        title: this.stopwatchTitleInput,
=======
    this.stopwatchList = result.data.map((stopwatch) => stopwatch.id);
    console.log(this.stopwatchList);
  },
  methods: {
    async tambahStopwatch(){
      const data = {
        title: this.titleText || "Untilted",
>>>>>>> Stashed changes
        time: 0,
        running: false,
        date: new Date(),
      };

<<<<<<< Updated upstream
      const resData = await axios.post(`http://localhost:3000/stopwatch`, data);
      
      //Pindah Kebawah, biar dapet id stopwatch baru dari DB
      this.stopwatches.stopwatchIds.push(resData.data.response.id);
      
      newStopwatch.clockId = resData.data.response.id;
      newStopwatch.setAttribute("id", `stopwatch-${resData.data.response.id}`);

      this.stopwatches.insertBefore(newStopwatch, this.titleForm);
      this.stopwatchTitleInput = "";
=======
      await addStopwatch(data);

      this.titleText = "";

      this.refreshData();
    },
    async refreshData(){
      const result = await fetchData();
      this.stopwatches = result.data;
      this.stopwatchList = result.data.map((stopwatch) => stopwatch.id);
      console.log(this.stopwatchList);
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
.form input, form button {
=======
.form input,
.form button {
>>>>>>> Stashed changes
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