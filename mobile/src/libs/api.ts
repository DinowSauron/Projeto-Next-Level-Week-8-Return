import axios from "axios";

export const api = axios.create({
  // baseURL: "http://192.168.0.103:3333" //backend
  baseURL: "https://projeto-next-level-week-8-return-production.up.railway.app/" //backend
})