import React, {useEffect} from 'react';
import {updateQuotesResultAction} from "../../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {ItemFlight} from "../item-flight/item-flight";

export const ListFlights = () => {
    const dispatch = useDispatch();
    const result = useSelector(state => state.data.browseQuotesResult);
    const isLoading = useSelector(state => state.data.loading);
    const selectedDate = useSelector(state => state.data.selectedDate);

    useEffect(() => {
        dispatch(updateQuotesResultAction(selectedDate));
    }, [selectedDate]);

    const getItems = (quotes) => quotes.map((quote) => <ItemFlight key={quote.QuoteId} item={quote}/>);

    return (
        <>
        { isLoading || !result
            ? <p className="font-italic text-muted p-3">Загрузка...</p>
            : <ul className="list-group list-group-flush overflow-auto">
                { (result.Quotes.length)
                    ? getItems(result.Quotes)
                    : <p className="font-italic text-muted p-3">На выбранную дату нет рейсов</p>
                }
            </ul>
        }
        </>
    );
}
