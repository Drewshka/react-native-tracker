import axios from "axios";
// import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  // baseURL: "https://3037-2607-fea8-80dd-1600-3859-91b3-3bcc-d480.ngrok.io",
  baseURL: "https://a8b5-2607-fea8-80dd-1600-3859-91b3-3bcc-d480.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
