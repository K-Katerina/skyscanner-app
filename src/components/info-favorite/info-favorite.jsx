import React from 'react';
import {useSelector} from "react-redux";
import {getWordForm} from "../../utils";

export const InfoFavorite = () => {
    const favoriteCount = useSelector(state => state.user.favoriteIds).size;

    return (
        <div className="pb-2">
            <span>
                Добавлено в Избранное:
                <span className="fw-bold text-primary">
                    &nbsp;{favoriteCount}&nbsp;
                </span>
                {getWordForm(favoriteCount, ['рейс', 'рейса', 'рейсов'])}
            </span>
        </div>
    );
}
