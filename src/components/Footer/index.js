import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
                <p className="responsibilityNote">Used data from <a href="https://api.nasa.gov/" title="NASA APIs">open sources</a> in accordance with <a href="https://www.nasa.gov/about/highlights/HP_Privacy.html" title="Privacy Policy">Privacy Policy</a> with studying purposes.</p>
                <p className="copyrightNote">All rights reserved. But that's not strictly, is it?</p>
            </footer>
        </React.Fragment>
    )
}

export { Footer };