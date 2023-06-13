import axios from 'axios';

const WeatherApiInstance = axios.create({
    baseURL: 'https://weatherapi-com.p.rapidapi.com',
    timeout: 30000,
    headers: {
        'X-RapidAPI-Key': '9619547dadmsh73b71850fd427fdp160bd2jsn8322b77cacb7',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
});

export default WeatherApiInstance;