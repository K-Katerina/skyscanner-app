import React, { useEffect } from 'react';
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {
    getQuotesResultAction,
    logout,
    updateDate,
    updateFavorites
} from "../../store/actions/actions";
import {getWordForm} from "../../utils";

export const FlightPage = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.data.loading);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const result = useSelector(state => state.data.browseQuotesResult);
    const selectedDate = useSelector(state => state.data.selectedDate);
    const favoriteIds = useSelector(state => state.user.favoriteIds);

    useEffect(() => {
        dispatch(getQuotesResultAction());
    }, []);

    const getPlacesById = (id) => {
        const place = result.Places.filter((place) => place.PlaceId === id)[0];
        return `${place.CityName} (${place.IataCode})`;
    }

    const getListCarriers = (ids) => {
        return ids.map((id) => result.Carriers.find((carrier) => carrier.CarrierId === id).Name + ' ');
    }

    const handleLogoutButtonClick = () => {
        dispatch(logout());
    }

    const handleCalendarChange = (event) => {
        dispatch(updateDate(event.target.value));
    }

    const handleFavoriteChange = (id) => {
        dispatch(updateFavorites(id));
    }

    return (
        <>
            <header className="d-flex justify-content-end p-2">
                <button type="button" className="btn btn-link text-decoration-none" onClick={() => handleLogoutButtonClick()}>
                    <b className="text-primary">{isLoggedIn ? 'Выйти' : 'Войти'}&nbsp;</b>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H8" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 16L20 11L15 6" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 11H8" stroke="#1157A7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </header>

            {isLoading
                ? <div>Загрузка...</div>
                : <article className="d-flex flex-column m-auto bg-white p-5 shadow border-light" style={{'width': '600px', 'borderRadius': '1.5rem'}}>
                    <div className="d-flex justify-content-between align-items-baseline">
                        <h4 className="">
                            Вылеты
                            <small className="text-muted">&nbsp;>&nbsp;</small>
                            SVO&nbsp;-&nbsp;JFK
                        </h4>
                        <input className="fw-bold text-primary text-end border-0 fs-5" style={{'width': '12rem'}} type="date" name="calendar" value={selectedDate}
                           max="2022-12-31" min="2020-01-01" onChange={(event) => handleCalendarChange(event)}/>
                    </div>
                        <div>
                            <span>Добавлено в Избранное: <span className="fw-bold text-primary">{favoriteIds.length}</span>&nbsp;{getWordForm(favoriteIds.length, ['рейс', 'рейса', 'рейсов'])}</span>
                        </div>


                        <ul className="list-group list-group-flush">
                            {result.Quotes.map((quote) =>
                                <li key={quote.QuoteId} className="list-group-item">
                                    <div className="row">
                                        <div className="col-2 align-self-center">
                                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="32" cy="32" r="32" fill="#0077FF" fill-opacity="0.05"/>
                                                <svg width="65" height="65" viewBox="0 -15 38 65" fill="blue" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M27.3593 2.03887C26.1862 2.94881 25.8666 3.41783 21.7063 7.5432L19.2122 7.13626L20.3567 5.98953C21.1583 5.18634 21.1586 3.88685 20.3567 3.08366C19.5554 2.28074 18.2576 2.28047 17.4562 3.08366L14.2236 6.32264L2.9181 4.4784C2.18751 4.35961 1.44009 4.60174 0.917251 5.12561C-0.0881136 6.13294 0.0483383 7.79952 1.19523 8.63107L12.4615 16.8058L10.3522 18.9195C9.62935 19.6437 8.86858 20.6398 8.08672 21.8837L2.83265 20.3356C2.0572 20.1074 1.2198 20.3212 0.647018 20.894C-0.328173 21.8711 -0.180773 23.4938 0.951965 24.2799L5.25915 27.2674C4.50933 28.9254 4.05351 30.1243 4.03241 30.1797C3.93682 30.4317 3.99797 30.7166 4.18809 30.9071C4.37929 31.0987 4.66394 31.1584 4.91414 31.0631C4.96942 31.0422 6.16598 30.5853 7.82076 29.834L10.8027 34.1498C11.5885 35.2867 13.2081 35.4306 14.1822 34.4546C14.7536 33.8812 14.967 33.0422 14.739 32.2652L13.1942 27.0011C14.4364 26.2172 15.43 25.455 16.1526 24.7312L18.2621 22.6176L26.4207 33.9058C27.2519 35.0569 28.9153 35.1906 29.9196 34.1844C30.4421 33.6608 30.6838 32.9114 30.5655 32.1791L28.7249 20.8523L31.9573 17.6136C32.7589 16.8104 32.7589 15.5101 31.9573 14.7072C31.1559 13.904 29.8589 13.904 29.0573 14.7072L27.9126 15.8539L27.5067 13.355C31.6283 9.18223 32.0889 8.86946 32.9976 7.6941C32.9987 7.69277 33 7.69116 33.0011 7.68956C35.1095 4.9517 35.603 2.18656 34.2281 0.808402C32.8529 -0.568685 30.0929 -0.0747855 27.3593 2.03887ZM18.4229 4.05246C18.6899 3.78464 19.1228 3.78464 19.3901 4.05246C19.6574 4.32028 19.6571 4.75291 19.3901 5.02073L17.5492 6.86496L15.8864 6.59366L18.4229 4.05246ZM1.99685 7.52127C1.52902 7.18228 1.47534 6.5035 1.88416 6.09415C2.09699 5.88064 2.40193 5.78191 2.69887 5.83034L20.5151 8.73675L13.4407 15.8247L1.99685 7.52127ZM1.61366 21.8631C1.83209 21.6445 2.15146 21.5626 2.44706 21.6499L7.3612 23.0978C6.85865 23.9797 6.35156 24.9538 5.84581 26.0083L1.73036 23.1538C1.29857 22.8541 1.24196 22.2353 1.61366 21.8631ZM13.215 33.4866C12.8465 33.8558 12.2281 33.806 11.9266 33.3699L9.07766 29.2462C10.1308 28.7389 11.1033 28.2305 11.9824 27.7281L13.4273 32.6516C13.5144 32.948 13.4329 33.268 13.215 33.4866ZM30.0242 15.6757C30.2913 15.4081 30.7233 15.4079 30.9906 15.6757C31.2579 15.9435 31.2576 16.3769 30.9906 16.6448L28.4541 19.186L28.1836 17.5199L30.0242 15.6757ZM29.2159 32.3987C29.2643 32.697 29.1657 33.0026 28.9529 33.2158C28.5462 33.6233 27.8682 33.5735 27.5283 33.1027L19.2411 21.6367L26.3155 14.5485L29.2159 32.3987ZM15.186 23.7624C14.4337 24.5164 13.3328 25.3303 11.9138 26.1819C10.0691 27.2888 7.88618 28.337 5.91711 29.175C6.77614 27.1486 7.84212 24.926 8.97058 23.0566C9.79597 21.6884 10.5861 20.6222 11.3191 19.888C28.0175 3.1971 27.0282 4.05808 28.0415 3.24606C29.1657 3.17409 30.1553 3.50853 30.8443 4.19881C31.5332 4.8891 31.8673 5.88091 31.7954 7.00703C30.9831 8.0248 31.8323 7.04315 15.186 23.7624ZM32.9653 5.20721C32.7469 4.45218 32.3589 3.77902 31.8112 3.23028C31.2635 2.6818 30.5917 2.29278 29.8384 2.07392C30.8277 1.57119 32.4937 1.00826 33.2614 1.77694C33.8676 2.38455 33.717 3.72204 32.9653 5.20721Z" fill="#1157A7"/>
                                                </svg>
                                            </svg>
                                        </div>
                                        <div className="col-7">
                                            <div>
                                                <span>{getPlacesById(quote.OutboundLeg.OriginId)}</span>
                                                &nbsp;→&nbsp;
                                                <span>{getPlacesById(quote.OutboundLeg.DestinationId)}</span>
                                            </div>
                                            <div>
                                                {moment(quote.QuoteDateTime).format('DD MMM, YYYY')} - {moment(quote.QuoteDateTime).format('HH:mm')}
                                            </div>
                                            <div>
                                                {getListCarriers(quote.OutboundLeg.CarrierIds)}
                                            </div>
                                        </div>
                                        <div className="col-3 d-flex flex-column justify-content-between align-items-end">
                                            <button className="btn btn-link p-0" style={{'width':'min-content'}} onClick={() => handleFavoriteChange(quote.QuoteId)}
                                                    type="button">
                                                <svg width="23" height="20" viewBox="0 0 23 20" fill={favoriteIds.includes(quote.QuoteId) ? '#F04393' : 'none'} xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133V2.59133Z" stroke="#878787" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                            <div><small className="text-muted">Price:</small> {quote.MinPrice}₽</div>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </article>
            }
        </>
    );
}
