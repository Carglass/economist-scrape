import axios from "axios";

const rootApiAddress = "http://localhost:5000";
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
  console.log(article);
  console.log(articleToPost);
  return axios.post(`${rootApiAddress}/api/articles`, articleToPost, config);
}
