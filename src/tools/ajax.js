import axios from "axios";

const rootApiAddress = "https://evening-sierra-80041.herokuapp.com";
const config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};

export function scrapeCall() {
  return axios.get(`${rootApiAddress}/scrape`, config);
}

export function saveArticleCall(article) {
  let articleToPost = {
    article: article
  };
  return axios.post(`${rootApiAddress}/api/articles`, articleToPost, config);
}

export function loadArticlesCall() {
  return axios.get(`${rootApiAddress}/api/articles`, config);
}

export function upVoteArticleCall(id) {
  return axios.put(`${rootApiAddress}/api/upvote/${id}`);
}

export function downVoteArticleCall(id) {
  return axios.put(`${rootApiAddress}/api/downvote/${id}`);
}

export function postArticleCommentCall(id, comment) {
  return axios.post(`${rootApiAddress}/api/comments/${id}`, comment, config);
}
