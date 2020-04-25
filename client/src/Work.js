import React from "react";

export default function Work() {
    return (
        <>
            <div className="foreground">
                <div className="top-container">
                    <h1>Work</h1>
                    <p className="subtitle">here's some stuff I've done</p>
                </div>
                <div>
                    <ul className="portfolio-list-grid">
                        <li className="portfolio-list-item"><a className="portfolio-list-link" href="https://park-burlington.herokuapp.com/"><img className="portfolio-list-image" src="/images/parkburlington_thumbnail.jpg" alt="parkburlington page"></img>Park Burlington</a></li>
                        <li className="portfolio-list-item"><a className="portfolio-list-link" href="https://hidden-fortress-73610.herokuapp.com/"><img className="portfolio-list-image" src="/images/mockblog_thumbnail.jpg" alt="yelpington page"></img>Mock Blog</a></li>
                        <li className="portfolio-list-item"><a className="portfolio-list-link" href="https://secure-fjord-65417.herokuapp.com/"><img className="portfolio-list-image" src="/images/yelpington_thumbnail.jpg" alt="yelpington page"></img>Yelpington</a></li>
                        <li className="portfolio-list-item"><a className="portfolio-list-link" href="https://stark-plateau-02827.herokuapp.com/"><img className="portfolio-list-image" src="/images/triptactoe_thumbnail.jpg" alt="trip-tac-toe game"></img>Trip-Tac-Toe</a></li>
                        <li className="portfolio-list-item"><a className="portfolio-list-link" href="https://github.com/JonChamplain?tab=repositories"><img className="portfolio-list-image" src="/images/github_thumbnail.jpg" alt="github page"></img>GitHub</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
