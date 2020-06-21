import React from 'react';
import './ModalBlock.css';

function ModalBlock(props) {
    return (
        <div id="myModal" className="modal" onClick={(e) => props.closeModal(e)}>
            {props.itemMediaType === 'video' ?
                <iframe src={props.itemUrl} className="modal-content-image" title={props.itemTitle}></iframe> :
                <img src={props.itemUrl} className="modal-content-image" alt={props.itemTitle}></img>
            }
            <p id="caption">{props.itemTitle}</p>
        </div>
    )
}

export { ModalBlock };