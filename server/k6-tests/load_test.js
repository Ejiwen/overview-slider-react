import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "5m", target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
    { duration: "10m", target: 100 }, // stay at 100 users for 10 minutes
    { duration: "5m", target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ["p(99)<1000"], // 99% of requests must complete below 7s
    "logged in successfully": ["p(99)<1000"], // 99% of requests must complete below 1.5s
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
