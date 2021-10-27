<template>
  <div class="container">
    <div class="mb2">
      <button class="reset-btn box-shadow danger-red" @click="resetAllStopwatch()">Reset All</button>
    </div>
    <div class="mb2">
      <form>
        <input class="box-shadow" type="text" v-model="stopwatchTitleInput" placeholder="Untitled" />
        <button class="gradient box-shadow" @click="addStopwatch()">+</button>
      </form>
    </div>
    <transition-group name="list" tag="div">
      <StopwatchListItem :stopwatch="stopwatch" v-for="stopwatch in stopwatches" :key="stopwatch.id"/>
    </transition-group>
  </div>
</template>

<script>
import http from "../http";
import StopwatchListItem from './StopwatchListItem.vue'

export default {
  name: "StopwatchList",
  components: {
    StopwatchListItem
  },
  data() {
    return {
      stopwatches: [],
      stopwatchTitleInput: ''
    }
  },
  mounted: async function() {
    const result = await http.get('/stopwatch');
    this.stopwatches = result.data;
    console.log(this.stopwatches);
  },
  methods: {
    addStopwatch: async function() {
      let data = {
        title: this.stopwatchTitleInput,
        time: 0,
        running: false,
        date: new Date(),
      };

      http.post(`/stopwatch`, data);
      
      this.stopwatchTitleInput = "";   
    },
    resetAllStopwatch: async function(){
      var r = confirm("Anda yakin akan reset semua stopwatch ?" );
      if (r == true) {
        http.put(`/stopwatch/reset`);
      }
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