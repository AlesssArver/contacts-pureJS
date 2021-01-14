import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export type ResponseAPI<D = {}> = {
  data: D;
};
