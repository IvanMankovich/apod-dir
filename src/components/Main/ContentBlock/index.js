import React from 'react';
import './ContentBlock.css'

function ContentBlock(props) {
    return (
        <div className="contentBlock">
            {props.itemMediaType === 'video' ?
                <React.Fragment>
                    <h3 className="contentBlock_contentTitle">{props.itemTitle}</h3>
                    <iframe className="contentBlock_contentItem" width="560" height="315" src={props.itemUrl} frameBorder="0" title={props.itemTitle} allowFullScreen></iframe>
                    <p className="contentBlock_contentExplanation">{props.itemExplanation}</p>
                </React.Fragment> :
                <React.Fragment>
                    <h3 className="contentBlock_contentTitle">{props.itemTitle}</h3>
                    <img className="contentBlock_contentItem" src={props.itemUrl} alt={props.itemTitle}></img>
                    <p className="contentBlock_contentExplanation">{props.itemExplanation}</p>
                </React.Fragment>
            }
            <hr />
        </div>
    )
}

export { ContentBlock };