import React from 'react';
import ProjectCell from './ProjectCell';
import list_price_predictions from "../../assets/pictures/list_price_predictions.png";
import ExampleRoute from "../../assets/pictures/ExampleRoute.png"

function ProjectList() {
    return (
        <div>
            <ProjectCell
                title="Location Embeddings"
                subtitle="Trained a zipcode embedding model using Skip-Gram Word2Vec and user clickstream data"
                href="https://github.com/glenliu21/location-embeddings-model"
                img={list_price_predictions}
            />
            <ProjectCell
                title="Route360"
                subtitle="iOS app that generates a running loop of a specified distance that starts from and ends at a user-provided location. Implemented using MapKit, UIKit and the Core Location framework."
                href="https://github.com/glenliu21/Route360"
                img={ExampleRoute}
            />
        </div>
    );
}

export default ProjectList;