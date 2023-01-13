import axios from 'axios';

const URL = 'http://localhost:5000/trips';

export const fetchTrips = () => axios.get(URL);