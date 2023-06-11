import React from 'react';
import EmersonPhoto from './EmersonPhoto';

function Emerson() {
    return (
        <div className="phil-center-wrapper">
            <div className="phil-center">
                <EmersonPhoto />
                <h3>Pictured: me in front of <a
                    href="https://historycambridge.org/james/James%2010.html" target="_blank" rel="noopener noreferrer">
                    Emerson Hall
                </a>
                </h3>
            </div>
        </div>
    );
}

export default Emerson;