import React from "react";

export default function Home() {
  return (
    <>
      <div className="foreground">
        <div className="top-container">
          <h1>I'm Jon.</h1>
          <p className="subtitle">a web developer</p>
          <img
            className="jon-character"
            src="images/jon-character-circle.png"
            alt="jon"
          />
        </div>
        <div className="text-block">
          <h2>I'm a web developer based in Burlington, Vermont.</h2>
          <br></br>
          <p>
            I love to build beautiful and functional technology.
            <br></br>
            For examples of my work, you can view my portfolio <a href="/work">here</a>.
          </p>
          <p>

          </p>
        </div>
        
      </div>
    </>
  );
}
