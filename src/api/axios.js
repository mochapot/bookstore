import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.144:9944",
});

export default instance;

