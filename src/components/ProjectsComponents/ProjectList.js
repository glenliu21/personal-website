import React from 'react';
import ProjectCell from './ProjectCell';
import list_price_predictions from "../../assets/pictures/list_price_predictions.png";
import ExampleRoute from "../../assets/pictures/ExampleRoute.png";
import cs165_icon from "../../assets/pictures/CS165_Icon.png";

function ProjectList() {
    return (
        <div>
            <ProjectCell
                title="LuffyDB"
                desc="Designed and built a flexible and elastic column-store database system that can store
                and query 10 million entries while emphasizing main-memory optimization, fast access methods, 
                and efficient execution of concurrent read queries. Built as a semester project for CS165."
                href="http://daslab.seas.harvard.edu/classes/cs165/project.html"
                img={cs165_icon}
                tech={["C", "Docker"]}
            />
            <ProjectCell
                title="Location Embeddings"
                desc="Trained a zipcode embedding model using Skip-Gram Word2Vec and user clickstream data"
                href="https://github.com/glenliu21/location-embeddings-model"
                img={list_price_predictions}
                tech={["Python", "TensorFlow", "PySpark"]}
            />
            <ProjectCell
                title="Route360"
                desc="iOS app that generates a running loop of a specified distance that starts from and ends at a user-provided location. "
                href="https://github.com/glenliu21/Route360"
                img={ExampleRoute}
                tech={["Swift", "UIKit", "MapKit"]}
            />
        </div>
    );
}

export default ProjectList;