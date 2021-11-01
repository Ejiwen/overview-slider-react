import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "2m", target: 100 }, // below normal load
    { duration: "5m", target: 100 },
    { duration: "2m", target: 200 }, // normal load
    { duration: "5m", target: 200 },
    { duration: "2m", target: 300 }, // around the breaking point
    { duration: "5m", target: 300 },
    { duration: "2m", target: 400 }, // beyond the breaking point
    { duration: "5m", target: 400 },
    { duration: "10m", target: 0 }, // scale down. Recovery stage.
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
