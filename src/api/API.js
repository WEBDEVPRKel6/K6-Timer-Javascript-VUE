import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export async function fetchData() {
  try {
    return axios.get(`${BASE_URL}/stopwatch`);
  } catch (error) {
    console.log(error);
  }
}

export async function updateData(id, data) {
  try {
    return axios.put(`${BASE_URL}/stopwatch/update/${id}`, data);
  } catch (error) {
    console.log(error);
  }
}