import axios from 'axios';

const skyscannerApiClient = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-Ru/SVO-sky/JFK-sky/',
    headers: {
        'x-rapidapi-key': 'a24c81af87msha21ee44e529ae87p146462jsne6cb9955e44f',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    }
});

export const getQuotesResult = (selectedDate) => skyscannerApiClient.get(selectedDate).then(({data}) => data);
