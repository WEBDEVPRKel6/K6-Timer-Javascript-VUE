<template>
  <div class="container">
    <div class="mb2">
      <button class="reset-btn box-shadow danger-red">Reset All</button>
    </div>
    <div class="mb2">
      <div class="form">
        <input class="box-shadow" v-model="titleText" type="text" placeholder="Title" />
        <button class="gradient box-shadow" @click="tambahStopwatch" type="submit">+</button>
      </div>
    </div>
    <transition-group name="list" tag="div">
      <StopwatchListItem
        :stopwatch="stopwatch"
        v-for="stopwatch in stopwatches"
        :key="stopwatch.id"
      />
    </transition-group>
  </div>
</template>

<script>
import StopwatchListItem from "./StopwatchListItem.vue";
import { fetchData, addStopwatch } from "../api/API";

let stopwatchList = [];
export function delId(id){
  for(var i = 0; i < stopwatchList.length; i++){ 
    if (id == stopwatchList[i]){
      stopwatchList.splice(i,1);
    }
  }
  console.log(stopwatchList);
}
export function getIdList(){
  return stopwatchList;
}

export default {
  name: "StopwatchList",
  components: {
    StopwatchListItem
  },
  data() {
    return {
      stopwatches: [],
      stopwatchTitleInput: "Untitled",
      titleText: "",
      // StopwatchList buat list data Stopwatch delete tanpa relod
    };
  },
  async created() {
    const result = await fetchData();
    this.stopwatches = result.data;
    stopwatchList = result.data.map((stopwatch) => stopwatch.id);
    console.log(stopwatchList);
  },
  methods: {
    async tambahStopwatch(){
      const data = {
        title: this.titleText || "Untilted",
        time: 0,
        running: false,
        date: new Date(),
      };

      await addStopwatch(data);

      this.titleText = "";

      this.refreshData();
    },
    async refreshData(){
      const result = await fetchData();
      this.stopwatches = result.data;
      stopwatchList = result.data.map((stopwatch) => stopwatch.id);
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
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
}
.form {
  width: 100%;
  display: flex;
}
.form input {
  width: 70%;
  margin-right: 1rem;
  text-align: center;
  color: #9e9e9e;
}
.form button {
  width: 30%;
}
.form input,
.form button {
  padding: 0.4rem 0.5rem;
  border: 0;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
}
@media (min-width: 1080px) {
  .container {
    width: 40%;
  }
}
</style>