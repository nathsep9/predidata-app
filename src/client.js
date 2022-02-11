import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const cleanUrl = (url) => url.replace(/^\/+|\/+$/g, "");

export const client = axios.create({
  baseURL: cleanUrl(REACT_APP_API_URL),
});

export default client;
