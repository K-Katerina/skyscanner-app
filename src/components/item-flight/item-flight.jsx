import React from 'react';
import moment from "moment";
import {useSelector} from "react-redux";
import {ButtonFavorite} from "../button-favorite/button-favorite";
import PropTypes from "prop-types";

export const ItemFlight = ({item}) => {
    const result = useSelector(state => state.data.browseQuotesResult);

    const getPlacesById = (id) => {
        const place = result.Places.filter((place) => place.PlaceId === id)[0];
        return `${place.CityName} (${place.IataCode})`;
    }

    const getListCarriers = (ids) => {
        return ids.map((id) => result.Carriers.find((carrier) => carrier.CarrierId === id).Name + ' ');
    }

    //col-lg-4 col-sm-6 col-md-5

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="d-none d-md-inline col-lg-2 col-md-2 align-self-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="#0077FF" fillOpacity="0.05"/>
                        <svg width="65" height="65" viewBox="0 -15 38 65" fill="blue" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.3593 2.03887C26.1862 2.94881 25.8666 3.41783 21.7063 7.5432L19.2122 7.13626L20.3567 5.98953C21.1583 5.18634 21.1586 3.88685 20.3567 3.08366C19.5554 2.28074 18.2576 2.28047 17.4562 3.08366L14.2236 6.32264L2.9181 4.4784C2.18751 4.35961 1.44009 4.60174 0.917251 5.12561C-0.0881136 6.13294 0.0483383 7.79952 1.19523 8.63107L12.4615 16.8058L10.3522 18.9195C9.62935 19.6437 8.86858 20.6398 8.08672 21.8837L2.83265 20.3356C2.0572 20.1074 1.2198 20.3212 0.647018 20.894C-0.328173 21.8711 -0.180773 23.4938 0.951965 24.2799L5.25915 27.2674C4.50933 28.9254 4.05351 30.1243 4.03241 30.1797C3.93682 30.4317 3.99797 30.7166 4.18809 30.9071C4.37929 31.0987 4.66394 31.1584 4.91414 31.0631C4.96942 31.0422 6.16598 30.5853 7.82076 29.834L10.8027 34.1498C11.5885 35.2867 13.2081 35.4306 14.1822 34.4546C14.7536 33.8812 14.967 33.0422 14.739 32.2652L13.1942 27.0011C14.4364 26.2172 15.43 25.455 16.1526 24.7312L18.2621 22.6176L26.4207 33.9058C27.2519 35.0569 28.9153 35.1906 29.9196 34.1844C30.4421 33.6608 30.6838 32.9114 30.5655 32.1791L28.7249 20.8523L31.9573 17.6136C32.7589 16.8104 32.7589 15.5101 31.9573 14.7072C31.1559 13.904 29.8589 13.904 29.0573 14.7072L27.9126 15.8539L27.5067 13.355C31.6283 9.18223 32.0889 8.86946 32.9976 7.6941C32.9987 7.69277 33 7.69116 33.0011 7.68956C35.1095 4.9517 35.603 2.18656 34.2281 0.808402C32.8529 -0.568685 30.0929 -0.0747855 27.3593 2.03887ZM18.4229 4.05246C18.6899 3.78464 19.1228 3.78464 19.3901 4.05246C19.6574 4.32028 19.6571 4.75291 19.3901 5.02073L17.5492 6.86496L15.8864 6.59366L18.4229 4.05246ZM1.99685 7.52127C1.52902 7.18228 1.47534 6.5035 1.88416 6.09415C2.09699 5.88064 2.40193 5.78191 2.69887 5.83034L20.5151 8.73675L13.4407 15.8247L1.99685 7.52127ZM1.61366 21.8631C1.83209 21.6445 2.15146 21.5626 2.44706 21.6499L7.3612 23.0978C6.85865 23.9797 6.35156 24.9538 5.84581 26.0083L1.73036 23.1538C1.29857 22.8541 1.24196 22.2353 1.61366 21.8631ZM13.215 33.4866C12.8465 33.8558 12.2281 33.806 11.9266 33.3699L9.07766 29.2462C10.1308 28.7389 11.1033 28.2305 11.9824 27.7281L13.4273 32.6516C13.5144 32.948 13.4329 33.268 13.215 33.4866ZM30.0242 15.6757C30.2913 15.4081 30.7233 15.4079 30.9906 15.6757C31.2579 15.9435 31.2576 16.3769 30.9906 16.6448L28.4541 19.186L28.1836 17.5199L30.0242 15.6757ZM29.2159 32.3987C29.2643 32.697 29.1657 33.0026 28.9529 33.2158C28.5462 33.6233 27.8682 33.5735 27.5283 33.1027L19.2411 21.6367L26.3155 14.5485L29.2159 32.3987ZM15.186 23.7624C14.4337 24.5164 13.3328 25.3303 11.9138 26.1819C10.0691 27.2888 7.88618 28.337 5.91711 29.175C6.77614 27.1486 7.84212 24.926 8.97058 23.0566C9.79597 21.6884 10.5861 20.6222 11.3191 19.888C28.0175 3.1971 27.0282 4.05808 28.0415 3.24606C29.1657 3.17409 30.1553 3.50853 30.8443 4.19881C31.5332 4.8891 31.8673 5.88091 31.7954 7.00703C30.9831 8.0248 31.8323 7.04315 15.186 23.7624ZM32.9653 5.20721C32.7469 4.45218 32.3589 3.77902 31.8112 3.23028C31.2635 2.6818 30.5917 2.29278 29.8384 2.07392C30.8277 1.57119 32.4937 1.00826 33.2614 1.77694C33.8676 2.38455 33.717 3.72204 32.9653 5.20721Z" fill="#1157A7"/>
                        </svg>
                    </svg>
                </div>
                <div className="col-lg-7 col-sm-8 col-md-7 col-8">
                    <div>
                        <span className="d-sm-inline-block">{getPlacesById(item.OutboundLeg.OriginId)}</span>
                        &nbsp;→
                        <span className="d-sm-inline-block"> {getPlacesById(item.OutboundLeg.DestinationId)}</span>
                    </div>
                    <div>
                        {moment(item.OutboundLeg.DepartureDate).format('DD MMM, YYYY')} - {moment(item.OutboundLeg.DepartureDate).format('HH:mm')}
                    </div>
                    <div>
                        {getListCarriers(item.OutboundLeg.CarrierIds)}
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-4 col-md-3 d-flex flex-column justify-content-between align-items-end">
                    <ButtonFavorite item={item}/>
                    <div>
                        <small className="text-muted d-none d-sm-inline">
                            Price:&nbsp;
                        </small>
                        {item.MinPrice}₽
                    </div>
                </div>
            </div>
        </li>
    );
}


ItemFlight.propTypes = {
    item: PropTypes.shape({
        QuoteId: PropTypes.number.isRequired,
        OutboundLeg: PropTypes.object,
        MinPrice: PropTypes.number
    })
};
