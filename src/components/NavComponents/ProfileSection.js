import React from 'react';
import "../../App.css"
import { Link } from "react-router-dom";



function ProfileSection() {
    return (
        <div className="profile-section">
            <Link to="/" style={{ textDecoration: "none" }}><h1>Glen Liu</h1></Link>
        </div>
    );
};

export default ProfileSection;