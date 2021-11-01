import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 1, // 1 user looping for 1 minute
  duration: "1m",

  thresholds: {
    http_req_duration: ["p(80)<2000"], // 99% of requests must complete below 1.5s
  },
};

let API_BASE_URL = "http://127.0.0.1:3000";

export default function () {
  http.batch([
    ["GET", `${API_BASE_URL}/products`],
    ["GET", `${API_BASE_URL}/products/12`],
    ["GET", `${API_BASE_URL}/products/12/styles`],
  ]);
  sleep(1);
}
