import axios from "axios";

const api = axios.create({
  baseURL: "https://dz-news-api-1.onrender.com/api",
});

export const getArticles = (sortBy = "created_at", order = "desc") => {
  return api
    .get(`/articles`, { params: { sort_by: sortBy, order } })
    .then(({ data }) => {
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

export const updateVoteCount = (article_id, voteChange) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data;
    });
};

export const addComment = (article_id, comment) => {
  return api
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return api.get(`/topics`).then(({ data }) => {
    return data;
  });
};
