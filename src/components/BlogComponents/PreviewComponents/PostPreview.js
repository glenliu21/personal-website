import React from 'react';
import PostDate from "./PostDate";
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';


function PostPreview(props) {
    const postPath = `/blog/${props.basename}`;
    var style = null;
    useMediaQuery('(max-width:992px)') ? style = { width: "175px", margin: "auto" } : style = {};

    return (
        <div className="post-preview">
            <Link to={postPath}>    
                <h1>{props.title}</h1>
            </Link>
            <h2>{props.subtitle}</h2>
            <PostDate date={props.date} />
            <Divider component="p" sx={style}>O</Divider>
        </div>
    );
}

export default PostPreview;