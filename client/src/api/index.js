import axios from 'axios';

const API_URL = "http://localhost:5000/api/";
const GET_ALL_POST = API_URL + 'post';

export const getAllPostDetails = () => axios(GET_ALL_POST);