import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-lovelace-e31433932c95.herokuapp.com/",
});
