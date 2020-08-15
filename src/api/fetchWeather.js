import axios from 'axios';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '36299da3dc6eda541d7fbd4d034420bf';
export const fetchWeather = async(query) => {
    const { data } = await axios.get(WEATHER_URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}