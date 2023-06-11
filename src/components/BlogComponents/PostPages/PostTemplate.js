import React from 'react';
import posts_json from "../../../posts_raw/posts.json";
import { Divider } from '@mui/material';
import Footer from '../../Footer';

function PostTemplate(props) {
    var post_data = posts_json[props.basename];
    return (
        <div className="post">
            <div className="post-heading">
                <h1>{post_data.title}</h1>
                <h3>Written {post_data.date}</h3>
                <h2>{post_data.subtitle}</h2>
                <Divider>O</Divider>
            </div>
            <div className="post-body">
                {props.body}
            </div>
            <div className="blog-footer">
                <Footer />
            </div>
        </div>
    );
}

export default PostTemplate;