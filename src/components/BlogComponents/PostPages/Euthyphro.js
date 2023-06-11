import React from 'react';
import PostTemplate from './PostTemplate';

var body =
    <div>
        <h1>A Synopsis of the Euthyphro Problem</h1>
        <p><em>Is the pious loved by the gods because it's pious, or it is pious because it is loved?</em></p>
    </div>

function Euthyphro() {
    return (
        <PostTemplate
            basename="Euthyphro"
            body={body}
        />
    )
}

export default Euthyphro;