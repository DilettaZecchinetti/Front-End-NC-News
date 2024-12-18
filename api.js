import axios from "axios";

const api = axios.create({
  baseURL: "https://dz-news-api-1.onrender.com/api",
});

export const getArticles = () => {
  return api("/articles").then(({ data }) => {
    return data;
  });
};

export const getArticleById = (article_id) => {
  return api(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsById = (article_id) => {
  return api(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};
