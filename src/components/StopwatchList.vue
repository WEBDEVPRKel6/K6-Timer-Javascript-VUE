<template>
  <div class="container">
    <div class="mb2">
      <button class="reset-btn box-shadow danger-red">Reset All</button>
    </div>
    <div class="mb2">
      <form>
        <input class="box-shadow" type="text" placeholder="Title" />
        <button class="gradient box-shadow" type="submit">+</button>
      </form>
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
import { fetchData } from "../api/API";

export default {
  name: "StopwatchList",
  components: {
    StopwatchListItem,
  },
  data() {
    return {
      stopwatches: [],
      stopwatchTitleInput: "Untitled",
    };
  },
  async created() {
    const result = await fetchData();
    this.stopwatches = result.data;
  },
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

form {
  width: 100%;
  display: flex;
}

form input {
  width: 70%;
  margin-right: 1rem;
  text-align: center;
  color: #9e9e9e;
}

form button {
  width: 30%;
}

form input,
form button {
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