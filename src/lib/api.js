import axios from 'axios';

export default axios.create({
  baseURL: `https://mayaprojects.net/findmyguru/wp-json/findmyguru/v1/`
});