import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "2m", target: 400 }, // ramp up to 400 users
    { duration: "56m", target: 400 }, // stay at 400 for ~4 hours
    { duration: "2m", target: 0 }, // scale down. (optional)
  ],
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
