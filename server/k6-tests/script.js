import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 20,
  duration: "2s",
};

export default function () {
  let res = http.get("http://127.0.0.1:3000/products/12");
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
