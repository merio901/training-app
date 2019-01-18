import axios from "axios";

const API_VERSION = "https://api.github.com/";

export const getUser = user => axios.get(`${API_VERSION}users/${user}`);

export const getEmojis = () => axios.get(`${API_VERSION}emojis`);
