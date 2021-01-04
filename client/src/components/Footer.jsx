import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Wraglet</p>
      <p style={{ fontSize: "small" }}>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
