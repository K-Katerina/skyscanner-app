import React from 'react';
import {useSelector} from "react-redux";
import {getWordForm} from "../../utils";
import {TopArticleFlight} from "../top-article-flight/top-article-flight";
import {SectionPhotos} from "../section-photos/section-photos";
import {ListFlights} from "../list-flights/list-flights";

export const ArticleFlight = () => {
    const favoriteCount = useSelector(state => state.user.favoriteIds).size;

    return (
        <article className="d-flex flex-column m-auto bg-white p-5 shadow border-light" style={{'width': '650px', 'borderRadius': '1.5rem'}}>
            <TopArticleFlight/>
            <SectionPhotos/>
            <div>
                <span>
                    Добавлено в Избранное:
                    <span className="fw-bold text-primary">
                        &nbsp;{favoriteCount}&nbsp;
                    </span>{getWordForm(favoriteCount, ['рейс', 'рейса', 'рейсов'])}
                </span>
            </div>

            <ListFlights/>
        </article>
    );
}
