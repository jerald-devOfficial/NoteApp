import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InfoIcon from "@material-ui/icons/Info";

function Header() {
  return (
    <header>
      <a href="/">
        <h1>Notes</h1>
      </a>
      <ul className="nav">
        <li>
          <a href="https://github.com/jerald-devOfficial/NoteApp">
            <GitHubIcon
              fontSize="large"
              style={{ color: "#fff" }}
              href="https://github.com/jerald-devOfficial/NoteApp"
            />
          </a>
        </li>
        <li>
          <a href="/about">
            <InfoIcon fontSize="large" style={{ color: "#fff" }} />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
