import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 10,
  duration: "3s",
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
