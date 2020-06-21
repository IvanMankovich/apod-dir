import React, {useEffect, useState} from 'react';
import './Main.css';
import { SelectBlock } from './SelectBlock';
import { ContentBlock } from './ContentBlock';
import { ModalBlock } from './ModalBlock';
import { GalleryBlock } from './GalleryBlock';

function Main() {
    const [selectedDate, setSelectedDate] = useState(window.localStorage.getItem('selectedDate') || new Date(Date.now()).toISOString().slice(0, 10));
    const [itemUrl, setItemUrl] = useState('');
    const [itemTitle, setItemTitle] = useState('');
    const [itemExplanation, setItemExplanation] = useState('');
    const [itemMediaType, setItemMediaType] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const [currentItemUrl, setCurrentItemUrl] = useState('');
    const [currentItemTitle, setCurrentItemTitle] = useState('');
    const [currentItemMediaType, setCurrentItemMediaType] = useState('');
  
    const [gallery, setGallery] = useState([
        new Date(Date.now()).toISOString().slice(0, 10), 
        new Date(new Date(Date.parse(new Date(Date.now()).toISOString().slice(0, 10))).setDate(new Date(Date.parse(new Date(Date.now()).toISOString().slice(0, 10))).getDate() - 1)).toISOString().slice(0, 10), 
        new Date(new Date(Date.parse(new Date(Date.now()).toISOString().slice(0, 10))).setDate(new Date(Date.parse(new Date(Date.now()).toISOString().slice(0, 10))).getDate() - 2)).toISOString().slice(0, 10)
    ]);
  
    useEffect(() => {
        fetchData(selectedDate).catch(error => console.log(error));
        selectedDate === new Date(Date.now()).toISOString().slice(0, 10) ? window.localStorage.removeItem('selectedDate') : window.localStorage.setItem('selectedDate', selectedDate);
    }, []);
  
    async function fetchData(value) {
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=PGmVPPPGZf5veqfPsVAsygTZ57NI6Tq0QUJiVlWv&date=${value}`, {
            method: 'GET',
        })
        .then(response => {
            return response.json()
            }
        )
        .then(
            data => {
                setItemUrl(data.url);
                setItemTitle(data.title);
                setItemExplanation(data.explanation);
                setItemMediaType(data.media_type);
            }
        )
    }
  
    window.onscroll = function() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            getMoreImages();
        }
    };
  
    const handleDateChange = (e) => {
        let value = e.currentTarget.value;
        setSelectedDate(value);
        value === new Date(Date.now()).toISOString().slice(0, 10) ? window.localStorage.removeItem('selectedDate') : window.localStorage.setItem('selectedDate', value);
        fetchData(value);
    };
  
    const handleClickOnImage = (url, title, mediaType) => {
        setCurrentItemUrl(url);
        setCurrentItemTitle(title);
        setCurrentItemMediaType(mediaType);
        setIsModalOpen(true);
    }
  
    const closeModal = (event) => {
        if (event.target.className !== 'modal-content') {
            setIsModalOpen(false);
        }
    }
    const getMoreImages = () => {
        let iter = gallery.length;
        do {
            setGallery([...gallery, 
            new Date(new Date(Date.parse(new Date(gallery[gallery.length-1]).toISOString().slice(0, 10))).setDate(new Date(Date.parse(new Date(gallery[gallery.length-1]).toISOString().slice(0, 10))).getDate() - 1)).toISOString().slice(0, 10),
            new Date(new Date(Date.parse(new Date(gallery[gallery.length-1]).toISOString().slice(0, 10))).setDate(new Date(Date.parse(new Date(gallery[gallery.length-1]).toISOString().slice(0, 10))).getDate() - 2)).toISOString().slice(0, 10),
            new Date(new Date(Date.parse(new Date(gallery[gallery.length-1]).toISOString().slice(0, 10))).setDate(new Date(Date.parse(new Date(gallery[gallery.length-1]).toISOString().slice(0, 10))).getDate() - 3)).toISOString().slice(0, 10)
            ]);
            iter += 1;
        } while (iter % 3 !== 0);
    }

    return (
        <main>
            <SelectBlock selectedDate={selectedDate} handleDateChange={handleDateChange} />
            <ContentBlock itemUrl={itemUrl} itemExplanation={itemExplanation} itemTitle={itemTitle} itemMediaType={itemMediaType} />
            <GalleryBlock gallery={gallery} handleClickOnImage={handleClickOnImage} />
            {isModalOpen ? <ModalBlock itemUrl={currentItemUrl} itemTitle={currentItemTitle} itemMediaType={currentItemMediaType} closeModal={closeModal} /> : null}
        </main>
    )
}

export { Main };