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
    }, []);

    return (
        <>
        { isLoading
            ? <div>Загрузка...</div>
            : <ul className="list-group list-group-flush overflow-auto" style={{'max-height':'600px'}}>
                {result.Quotes.map((quote) =>
                    <ItemFlight item={quote}/>
                )}
            </ul>
        }
        </>
    );
}
