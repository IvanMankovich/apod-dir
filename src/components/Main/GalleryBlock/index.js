import React from 'react';
import { GalleryItem } from './GalleryItem'
import './GalleryBlock.css';

function GalleryBlock(props) {
    const handleClickOnImage = props.handleClickOnImage;
    const gallery = props.gallery;

    return (
        <div className="galleryBlockContainer">
            <h3>Check other Astronomy Picture of the Day</h3>
            <div className="galleryWrapper">
                {gallery.map(item => {
                    return <GalleryItem key={item} handleClickOnImage={handleClickOnImage} date={item} />
                })}
            </div>
        </div>
    )
}

export { GalleryBlock };