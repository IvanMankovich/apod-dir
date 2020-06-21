import React, { useState, useEffect } from 'react';
import './GalleryItem.css';

function GalleryItem(props) {
    const handleClickOnImage = props.handleClickOnImage;
    const [itemUrl, setItemUrl] = useState('');
    const [itemTitle, setItemTitle] = useState('');
    const [itemMediaType, setItemMediaType] = useState('');
    
    async function fetchData(value) {
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=PGmVPPPGZf5veqfPsVAsygTZ57NI6Tq0QUJiVlWv&date=${value}`, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            setItemUrl(data.url);
            setItemTitle(data.title);
            setItemMediaType(data.media_type);
        })
    }
    
    useEffect(() => {
        fetchData(props.date);
    }, [props.date]);

    if (itemUrl) {
        return (
            <React.Fragment>
                <div className="galleryItemBlock">
                    {itemMediaType === 'video' ?
                        <iframe src={itemUrl} className="galleryItem" title={itemTitle} onClick={() => handleClickOnImage(itemUrl, itemTitle, itemMediaType)}></iframe> :
                        <img src={itemUrl} className="galleryItem" alt={itemTitle} onClick={() => handleClickOnImage(itemUrl, itemTitle, itemMediaType)} />
                    }
                </div>
          </React.Fragment>
        )
    } else {
        return null;
    }
} 

export {GalleryItem};