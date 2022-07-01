import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  //baseURL: "http://192.168.15.33:3000/tracks"
  baseURL: "https://puce-lively-elk.cyclic.app"
 })

instance.interceptors.request.use(
  async(config) => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export default instance;