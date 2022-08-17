import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const API = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
   baseURL: API,
   timeout: 3500,
   headers: {
     ContentType: "application/json",
     Accept: "application/json",
     Authorization: `Bearer ${cookies.get("Authorization")}`,
   },
 });

export class UserService {
   GetList() {
      return axiosInstance.get(`/users`, {}).then(res => res).then( d => d.data)
      .catch((response) => {
         let { message } = response.response.data.errors;
         throw new Error(message[0]);
      });
   };
}

