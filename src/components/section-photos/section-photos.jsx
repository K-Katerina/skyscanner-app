import React from 'react';
import {useSelector} from "react-redux";

export const SectionPhotos = () => {

    const selectedDate = useSelector(state => state.data.selectedDate);

    const getPhoto = () => {
        const photos = Array(5).fill(``).map(() => `https://picsum.photos/200/150?r=` + selectedDate + Math.random());
        return photos.map((photo, index) => <img style={{height: '150px', width: '210px'}} key={index} className="img-thumbnail" src={photo} alt=""/>);
    }

    return (
        <section className="pt-3 pb-3 d-flex overflow-auto">
            {getPhoto()}
        </section>
    );
}
