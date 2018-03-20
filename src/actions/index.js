import axios from 'axios';

const API_KEY = 'a53267af2762146666ab36ecb2acd64f';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCT_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROUTE_URL}&q=${city},th`;
    const request = axios.get(url);

    return{
        type:FETCT_WEATHER,
        payload:request
    };
}