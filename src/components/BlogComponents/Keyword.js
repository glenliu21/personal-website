import React from 'react';
import Button from '@mui/material/Button';

function Keyword(props) {
    return (  
        <Button 
            disableRipple 
            variant="outlined"
            sx={{
                borderColor: "#1D1D1D",
                color: "#266AA6",
                fontWeight: "bold",
                fontFamily: "Raleway, sans-serif",
                margin: "0 5px 5px 0",
            }}
        >
            {props.keyword}
        </Button>
    );
}

export default Keyword;