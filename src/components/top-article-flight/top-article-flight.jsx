import React from 'react';
import moment from "moment";
import {updateQuotesResultAction} from "../../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";

export const TopArticleFlight = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector(state => state.data.selectedDate);

    const handleCalendarChange = (event) => {
        dispatch(updateQuotesResultAction(event.target.value));
    }

    return (
        <div className="d-flex justify-content-between align-items-baseline">
            <h4 className="">
                Вылеты
                <small className="text-muted">&nbsp;>&nbsp;</small>
                SVO&nbsp;-&nbsp;JFK
            </h4>
            <input className="fw-bold text-primary text-end border-0 fs-5" style={{'width': '12rem'}} type="date" name="calendar" value={selectedDate}
                   max="2022-12-31" min={moment(new Date()).format('YYYY-MM-DD')} onChange={(event) => handleCalendarChange(event)}/>
        </div>
    );
}
