import React from "react";
/* eslint-disable jsx-a11y/accessible-emoji */ //-disabling the warning for the emoji

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤️ by Daya Anand C H</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
