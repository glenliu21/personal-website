import React, { useState, useEffect } from 'react';

function PhilHeader() {
    const DISPLAY_TIME = 5000; 
    const subtitleItems = [
        {
            subtitle: "I wanted only to live in accord with the promptings which came from my true self. Why was that so very difficult?",
            author: "Hermann Hesse",
            title: "Demian"
        },
        {
            subtitle: "Whoever wishes to become a philosopher must learn not to be frightened by absurdities.",
            author: "Bertrand Russell",
            title: "The Problems of Philosophy"
        },
        {
            subtitle: "We are seeking for justice, a thing more precious than many pieces of gold.",
            author: "Plato",
            title: "Republic, Book I"
        }
    ];
    const [currentIndex, setCurrentItemIndex] = useState(0);
    const doubleItemsLength = subtitleItems.length * 2;

    useEffect(() => {
        const currentDisplayTime = (currentIndex % 2 === 0) ? DISPLAY_TIME : 500;
        // Alternate between changing subtitle after DISPLAY_TIME seconds and 0.5 for fade
        const intervalId = setInterval(() => {
            setCurrentItemIndex((prev) => (prev + 1) % doubleItemsLength);
        }, currentDisplayTime);

        return () => clearTimeout(intervalId);
    }, [currentIndex, doubleItemsLength]);

    return (
        <div className="phil-header">
            <h1>Philosophy</h1>
            <h2 className={currentIndex % 2 === 0 ? 'fade-in' : 'fade-out'}>{subtitleItems[Math.floor(currentIndex / 2)].subtitle} 
                <br></br> - {subtitleItems[Math.floor(currentIndex / 2)].author}, 
                <i> {subtitleItems[Math.floor(currentIndex / 2)].title}</i></h2>
        </div>
    );
}

export default PhilHeader;