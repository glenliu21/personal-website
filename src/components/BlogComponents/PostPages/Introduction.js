import React from 'react';
import PostTemplate from './PostTemplate';

var body =
    <div>
        <h1>What This Blog is Meant to Be</h1>

        <p>Today's the first day of 2023. "New year, new me" is how the saying goes, and for this year one of my resolutions is to write more. Why is this one of my goals? Well, thinking back on 2022, one of my best gifts has been the people in my life who have shown me ideas beyond my own perspective. These people include late literary authors, my professors, my friends at school, and many others who have taught me the importance of listening to new opinions and ideas. As such, I want to return the favor by providing some of my own thoughts to those who care to hear about them. </p>

        <h1>What is in a Post</h1>

        <p>The subject-matter of my posts will vary, but I enjoy thinking about philosophy and literature, so I expect that the vast majority of my posts will lie in one of those subjects.</p>

        <p>Each post will center around some idea that I've been pondering, generally presented in the form of a claim that I'll defend. Thus, each post will be laid out in a general argumentative structure. However, I'm hoping that the similarity between my posts and academic writing ends there. I actively stray away from making my posts overly rigorous because I want them to be understandable by everyone (if you wish to read overly rigorous writing, please see the "Philosophy" section). I use formalism in my posts only to make my thoughts coherent, not so that I can defend them rigorously. As such, my arguments may have gaps in logic, and they will almost certainly be missing other parts that would be requisite in a philosophical paper. But what I want to highlight is that these posts are not intended to <em>prove</em> some claim but rather to <em>introduce</em> some idea that I'm hoping the reader will think deeper about. Thus, my posts really should be taken for what they are: half-baked ruminations that I'm still pondering. </p>

        <p>If anyone is interested in talking to me about the subject matter of any of my content, feel free to email me at <a href="mailto:glenliu@college.harvard.edu">glenliu@college.harvard.edu</a>. </p>
    </div>

function Introduction() {
    return (
        <PostTemplate
            basename="Introduction"
            body={body}
        />
    )
}

export default Introduction;