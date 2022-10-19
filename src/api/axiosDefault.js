import axios from "axios";

axios.defaults.baseURL='https://kalender-planner-api.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true