import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.144:9944",
});

const instance1= axios.create({
  baseURL: "http://192.168.0.31:8915",
});

export {instance, instance1};