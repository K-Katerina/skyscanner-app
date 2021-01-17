import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getQuotesResultAction} from "../../store/actions/actions";

export const FlightPage = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.data.loading);
    const result = useSelector(state => state.data.browseQuotesResult);

    useEffect(() => {
        dispatch(getQuotesResultAction());
    }, []);

    const getPlacesById = (id) => {
        const place = result.Places.filter((place) => place.PlaceId === id)[0];
        return `${place.CityName} (${place.IataCode})`;
    }

    const getListCarriers = (ids) => {
        return ids.map((id) => result.Carriers.find((carrier) => carrier.CarrierId === id).Name);
    }

    return (isLoading
            ? <div>Загрузка...</div>
            : <React.Fragment>
                <h1 className="">Вылеты > SVO-JFK</h1>
                <div>
                    <span>Добавлено в Избранное: 10 рейсов</span>
                </div>
                <ul className="">
                    {result.Quotes.map((quote) =>
                        <li key={quote.QuoteId} className="">
                            <div className="">
                                <span>{getPlacesById(quote.OutboundLeg.OriginId)}</span>
                                ->
                                <span>{getPlacesById(quote.OutboundLeg.DestinationId)}</span>
                            </div>
                            {quote.QuoteDateTime}
                            {getListCarriers(quote.OutboundLeg.CarrierIds)}
                            Price: {quote.MinPrice}₽
                        </li>
                    )}
                </ul>
            </React.Fragment>
    );
};
