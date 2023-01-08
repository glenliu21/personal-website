import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import useMediaQuery from '@mui/material/useMediaQuery';


function HeaderIntro() {
    const smOnly = useMediaQuery("(max-width: 991px)");

    return (
        <TypeWriterEffect
            textStyle={
                smOnly ? {textAlign: "center", fontWeight: "bold"} : {textAlign: "left", fontWeight: "bold"}
            }
            startDelay={0}
            cursorColor="#1D1D1D"
            typeSpeed={80}
            multiText={[
                "Hi, I'm Glen!", 
                "Welcome to my website!"
            ]}
            multiTextDelay={1000}
            multiTextLoop
        />
    );
}

export default HeaderIntro;