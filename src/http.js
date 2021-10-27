import axios from "axios";

const instance = axios.create({
    headers: {
      "Content-Type": "application/json"
    },
    baseURL: "http://localhost:3000"
   
  });
  
  export default instance;