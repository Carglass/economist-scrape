import axios from "axios";

const rootApiAddress = "https://evening-sierra-80041.herokuapp.com";
const config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};

export function scrapeCall() {
  return axios.get(`${rootApiAddress}/scrape`, config);
}
