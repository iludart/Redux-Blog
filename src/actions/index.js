import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = 'pesho123123';

export const GET_POSTS = 'GET_POSTS';

export function getPosts() {
    const url = `${ROOT_URL}/posts?key=${KEY}`
    const response = axios.get(url);
    return {
        type: GET_POSTS,
        payload: response
    }
}