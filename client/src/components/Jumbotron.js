import React from "react";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="inside-jumbotron-container">
                    <img src="imgs/Google.png" alt="googleLogo" className="google-logo-image"/>
                    <h1 className="jumbotron-about-text-container"> Book Search </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
