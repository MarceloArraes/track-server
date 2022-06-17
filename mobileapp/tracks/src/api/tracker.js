import axios from "axios";


export default axios.create({
  //baseURL: "http://192.168.15.33:3000/tracks"
  baseURL: "https://puce-lively-elk.cyclic.app/tracks"
})