import axios from "axios";

export function sendJoinData(data) {
  return axios({
    method: "post",
    url: `127.0.0.1:8080/member`,
    data: data,
  });
}
