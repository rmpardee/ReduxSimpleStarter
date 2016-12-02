import axios from 'axios';
import { API_KEY } from '../config.js';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // the middleware we're using is smart enough to see the payload here is a promise
  // so it will automatically wait until that request comes back
  // before passing it on to the reducer
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}