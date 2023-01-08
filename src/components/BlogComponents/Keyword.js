import React from 'react';
import Button from '@mui/material/Button';

function Keyword() {
    return (  
        <Button 
            disableRipple 
            variant="outlined"
            sx={{
                borderColor: "#1D1D1D",
                color: "#266AA6",
                fontWeight: "bold",
                fontFamily: "Raleway, sans-serif"
            }}
        >
            philosophy
        </Button>
    );
}

export default Keyword;