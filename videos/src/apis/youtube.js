import axios from "axios";

const KEY = 'AIzaSyA36d1BwN5Yftq9ojNRwfd7Xvex4MqnIsE';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type : 'videos',
        maxResults : 5,
        key : KEY
    }
});