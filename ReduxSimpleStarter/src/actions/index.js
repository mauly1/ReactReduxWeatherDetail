import axios from "axios";

const API_KEY = '9d507387ec2a20ae74e638bf5e976ecc';
export const FETCH_WEATHER = 'FETCH_WEATHER'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},IN`;
     const request = axios.get(url);
console.log('request ',request)
    return {
        type: FETCH_WEATHER,
        payload: request
    };

}
