import axios from "axios";

const Dependency = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    mode: "no-cors",
  }
}

const All_BE = axios.create({
  baseURL: 'http://10.1.1.20:8085/',
  // Dependency
  headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZW5pc2giLCJpc1VzZXIiOnRydWUsImV4cCI6MTYxNDY4NDA2MCwiaWF0IjoxNjE0NjY2MDYwfQ.V9z8cu3R_0kX0USLzJYlIY-cQC50d48iRXmpCm_0mr-ninl3Q5hDjyRL8Mw200uHHUpQtYNlLuju1HfoIttYBQ' }
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
const Login = axios.create({
  baseURL: 'http://10.1.1.20:8085/',
  Dependency
})

export { All_BE, User_API, Group_API, Login };