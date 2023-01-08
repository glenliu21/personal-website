import React from 'react';
import ClockIcon from "./ClockIcon";

function PostDate(props) {
    return (  
        <div className="date-div">
            <ClockIcon/>
            <p>{props.date}</p>
        </div>
    );
}

export default PostDate;