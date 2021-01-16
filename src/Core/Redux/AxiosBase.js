import axios from "axios";

const Dependency = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    'Authorization': 'token %s % token',
    mode: "no-cors",
  }
}

const Auth = axios.create({
  baseURL: 'http://10.1.1.20:8080/',
  Dependency
})
const User_API = axios.create({
  baseURL: 'http://10.1.1.144:8081/',
  // baseURL: "http://10.1.1.150:8080/",
  Dependency
})
const Group_API = axios.create({
  baseURL: 'http://10.1.1.158:8080/',
  Dependency
})

export { Auth, User_API, Group_API };