import React from 'react';
import BlogHeader from '../BlogHeader';
import PostPreview from "./PostPreview";
import posts_json from "../../../posts_raw/posts.json";
import Footer from '../../Footer';

var postPreviews = [];
for (var basename in posts_json) {
    postPreviews.push(
        <PostPreview
            key={posts_json[basename].index}
            title={posts_json[basename].title}
            subtitle={posts_json[basename].subtitle}
            date={posts_json[basename].date}
            basename={basename}
            keywords={posts_json[basename].keywords}
        />
    );
}

function BlogPosts() {
    return (
        <div>
            <BlogHeader />
            {postPreviews}
            <Footer />
        </div>
    );
}

export default BlogPosts;