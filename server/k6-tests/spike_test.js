import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "10", target: 100 }, // below normal load
    { duration: "1m", target: 100 },
    { duration: "10s", target: 200 }, // normal load
    { duration: "3m", target: 200 },
    { duration: "10s", target: 300 }, // around the breaking point
    { duration: "3m", target: 300 },
    { duration: "10s", target: 400 }, // beyond the breaking point
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
