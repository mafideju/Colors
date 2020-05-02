import Axios from 'axios';
import KEYS from '../KEYS'

export default Axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${KEYS.API_KEY}`
    }
});