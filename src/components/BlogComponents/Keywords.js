import React from 'react';
import Keyword from "./Keyword.js";

function Keywords() {
    return (  
        <div className="popular-keywords">
            <h1>Popular keywords</h1>
            <Keyword keyword="Philosophy"/>
            <Keyword keyword="Theology"/>
        </div>
    );
}

export default Keywords;