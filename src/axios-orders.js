import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b827f.firebaseio.com/'
});

export default instance;