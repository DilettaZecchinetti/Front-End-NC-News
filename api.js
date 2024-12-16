import axios from "axios";

const api = axios.create({
  baseURL: "https://myas-news-api.onrender.com/api",
});

export const getArticles = () => {
  return api("/articles").then(({ data }) => {
    return data;
  });
};
