import axios from "axios";


const instance = axios.create({
  baseURL: "https://api.example.com", // Your API base URL
});

// instance.interceptors.request.use((config) => {
//   const { accessToken } = useAccessToekn();
//   if (accessToken) {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//   }

//   return config;
// });

export default instance;
