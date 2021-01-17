import axios from 'axios';

const skyscannerApiClient = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-Ru/SVO-sky/JFK-sky',
    headers: {
        'x-rapidapi-key': 'a24c81af87msha21ee44e529ae87p146462jsne6cb9955e44f',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    }
});

export const getQuotesResult = () => {
    return new Promise(resolve => setTimeout( () => resolve({
        "Quotes" : [ {
            "QuoteId" : 1,
            "MinPrice" : 27749,
            "Direct" : true,
            "OutboundLeg" : {
                "CarrierIds" : [ 1717,  1717],
                "OriginId" : 82495,
                "DestinationId" : 60987,
                "DepartureDate" : "2021-01-22T00:00:00"
            },
            "QuoteDateTime" : "2021-01-16T18:41:00"
        } ],
        "Carriers" : [ {
            "CarrierId" : 1717,
            "Name" : "Aeroflot"
        } ],
        "Places" : [ {
            "Name" : "Нью-Йорк Джон Ф Кеннеди",
            "Type" : "Station",
            "PlaceId" : 60987,
            "IataCode" : "JFK",
            "SkyscannerCode" : "JFK",
            "CityName" : "Нью-Йорк",
            "CityId" : "NYCA",
            "CountryName" : "Соединенные Штаты Америки"
        }, {
            "Name" : "Москва Шереметьево",
            "Type" : "Station",
            "PlaceId" : 82495,
            "IataCode" : "SVO",
            "SkyscannerCode" : "SVO",
            "CityName" : "Москва",
            "CityId" : "MOSC",
            "CountryName" : "Россия"
        } ],
        "Currencies" : [ {
            "Code" : "RUB",
            "Symbol" : "₽",
            "ThousandsSeparator" : " ",
            "DecimalSeparator" : ",",
            "SymbolOnLeft" : false,
            "SpaceBetweenAmountAndSymbol" : true,
            "RoundingCoefficient" : 0,
            "DecimalDigits" : 2
        } ]
    }), 100));
}
    // skyscannerApiClient.get('/2021-01-22').then(({ data }) => {
    //     return data;
    // })
