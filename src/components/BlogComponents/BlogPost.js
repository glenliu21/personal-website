import React from 'react';

function BlogPost(props) {
    return (
        <div>
            <div className="post-heading">
                {props.heading}
            </div>
            <div className="post-body">
                {props.body}
            </div>
        </div>
    )
}

export default BlogPost;