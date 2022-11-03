import axios from "axios";

axios.defaults.baseURL='https://kalender-planner-api.herokuapp.com/'

// axios.defaults.baseURL='https://8000-simonmorten-calenderapi-jupvamuj9r8.ws-eu72.gitpod.io/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();