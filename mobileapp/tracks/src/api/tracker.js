import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  //baseURL: "http://192.168.15.33:3000/tracks"
  baseURL: "https://3c4c-2804-7f7-e288-19cd-a00-27ff-febb-f581.sa.ngrok.io/"
 })

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')
    console.log("TOKEN ON INTERCEPTOR", token);
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