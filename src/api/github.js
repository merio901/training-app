import axios from "axios";

const API_VERSION = "https://api.github.com/";

const api = axios.create({
  baseURL: API_VERSION,
});

export const getUser = user => api.get(`users/${user}`);

export const getEmojis = () => api.get("https://api.github.com/emojis");
