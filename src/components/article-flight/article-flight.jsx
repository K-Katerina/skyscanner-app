import React from 'react';
import {TopArticleFlight} from "../top-article-flight/top-article-flight";
import {SectionPhotos} from "../section-photos/section-photos";
import {ListFlights} from "../list-flights/list-flights";
import {InfoFavorite} from "../info-favorite/info-favorite";

export const ArticleFlight = () => {

    return (
        <article className="d-flex flex-column m-auto bg-white p-5 shadow border-light border-radius col-xl-6 col-lg-7 col-sm-10 col-md-9">
            <TopArticleFlight/>
            <SectionPhotos/>
            <InfoFavorite/>
            <ListFlights/>
        </article>
    );
}
