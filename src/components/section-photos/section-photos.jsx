import React  from 'react';

export const SectionPhotos = () => {

    const getPhoto = () => {
        const photos = Array(5).fill(``).map(() => `http://picsum.photos/200/150?r=` + Math.random());
        return photos.map((photo, index) => <img style={{height: '150px', width: '200px'}} key={index} className="img-thumbnail" src={photo} alt=""/>);
    }

    return (
        <section className="pt-2 pb-2 d-flex overflow-auto" style={{height: '150px'}}>
            {getPhoto()}
        </section>
    );
}
