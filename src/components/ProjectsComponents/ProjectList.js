import React from 'react';
import ProjectCell from './ProjectCell';
import list_price_predictions from "../../assets/pictures/list_price_predictions.png";

function ProjectList() {
    return (
        <div>
            <ProjectCell
                title="Location Embeddings"
                subtitle="Trained a zipcode embedding model using Skip-Gram Word2Vec and user clickstream data"
                href="https://github.com/glenliu21/location-embeddings-model"
                img={list_price_predictions}
            />
        </div>
    );
}

export default ProjectList;