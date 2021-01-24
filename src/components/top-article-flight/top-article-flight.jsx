import React from 'react';
import moment from "moment";
import {updateDate} from "../../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import DatePicker from "react-date-picker";

export const TopArticleFlight = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector(state => state.data.selectedDate);

    const handleCalendarChange = (value) => {
        dispatch(updateDate(value));
    }

    return (
        <div className="d-flex justify-content-between align-items-baseline">
            <h4 className="text-dark">
                Вылеты
                <small className="text-muted">&nbsp;&gt;&nbsp;</small>
                SVO&nbsp;-&nbsp;JFK
            </h4>
            <DatePicker
                onChange={(value) => handleCalendarChange(value)}
                value={selectedDate}
                format={"dd/MM/yyyy"}
                placeholder="дд/мм/гггг"
                maxDate={moment().add(1, 'year').toDate()}
                minDate={new Date()}
            />
        </div>
    );
}
