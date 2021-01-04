import React from "react";

function About() {
  return (
    <div className="about-container">
      <h2 className="about">
        <b>About Notes App</b>
      </h2>
      <p className="about">
        "Note" is a note-taking CRUD application built with with React.js,
        Node.js, and Express.
      </p>
      <p className="about">
        This application allows you to add and delete notes. Based on Google's
        Keeper app.
      </p>
    </div>
  );
}

export default About;
