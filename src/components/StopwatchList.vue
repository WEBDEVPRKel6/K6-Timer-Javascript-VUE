<template>
  <div class="container">
    <div class="mb2">
      <button class="m1r1 reset-btn box-shadow danger-red" @click="handleResetAll">
        Reset All
      </button>
      <button class="reset-btn box-shadow danger-red" @click="handleDeleteAll">
        Delete All
      </button>
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
import {
  fetchData,
  addStopwatch,
  resetTimeAll,
  deleteAllStopwatch,
} from "../api/API";

// Mengambil data berupa id dari stopwatch yang ada.
let stopwatchList = [];
export function delId(id){
  for(var i = 0; i < stopwatchList.length; i++){ 
    if (id == stopwatchList[i]){
      stopwatchList.splice(i,1);
    }
  }
  console.log(stopwatchList);
}

// Delete elemen list id stopwatch.
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
      // StopwatchList digunakan untuk list data Stopwatch delete tanpa reload
    };
  },
  async created() {
    const result = await fetchData();
    this.stopwatches = result.data;
    stopwatchList = result.data.map((stopwatch) => stopwatch.id);
    console.log(stopwatchList);
  },
  methods: {
    // Function yang digunakan untuk menambah stopwatch.
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
    // Function yang digunakan untuk melakukan reset ke semua stopwatch yang ada (time == 0 dan running == false).
    async handleResetAll() {
      var r = confirm("Anda yakin reset semua stopwatch ? ");
      if (r == true) {
        await resetTimeAll();
        this.refreshData();
      }
    },
    // Function untuk delete semua stopwatch yang ada.
    async handleDeleteAll() {
      var r = confirm("Anda yakin menghapus semua stopwatch ? ");
      if (r == true) {
        await deleteAllStopwatch();
        this.refreshData();
      }
    },
    // Function untuk refresh html ketika action terjadi.
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