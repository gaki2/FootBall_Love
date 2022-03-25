import axios from 'axios';

const fetch = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
});

export function Join(data) {
  return fetch.post('/api/member', data);
}

export function Logout() {
  return fetch.post('/api/member/logout_jwt');
}

export function Login(data) {
  fetch.post(`/api/member/login_jwt/${data.id}`, data);
}

export function GetUser() {
  return fetch.get('/api/member/loginInfo');
}

export function UploadImg(imgFile) {
  return fetch.post('/api/profile_img', imgFile);
}

export function postUserPost(fd) {
  return axios({
    method: 'post',
    url: 'https://flove.fbl.p-e.kr/api/board/post',
    data: fd,
  });
}

export function postTeamInfo(data) {
  return axios({
    method: 'post',
    url: 'https://flove.fbl.p-e.kr/api/team',
    data: data,
  });
}

export function getTeamInfo() {
  return axios({
    method: 'get',
    url: 'https://flove.fbl.p-e.kr/api/team/list',
  });
}

export function getDetailTeamInfo(teamId) {
  return axios({
    method: 'get',
    url: `https://flove.fbl.p-e.kr/api/team/${teamId}`,
  });
}

export function makeBoardRequest(teamId, data) {
  return axios({
    method: 'post',
    url: `https://flove.fbl.p-e.kr/api/team/${teamId}/board`,
    data: data,
  });
}

export function getPosts(boardId) {
  return axios({
    method: 'get',
    params: {
      page: 0,
      size: 10,
    },
    url: `https://flove.fbl.p-e.kr/api/board/${boardId}/post`,
  });
}

export function makeBoardAdmin(data) {
  return axios({
    method: 'post',
    url: 'https://flove.fbl.p-e.kr/api/board',
    data: data,
  });
}

export function getBoardList() {
  return axios({
    method: 'get',
    url: 'https://flove.fbl.p-e.kr/api/board',
  });
}

export function deleteBoard(boardId) {
  return axios({
    method: 'delete',
    url: `https://flove.fbl.p-e.kr/api/board/${boardId}`,
  });
}
