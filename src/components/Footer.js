import React from "react";

const Footer = () => {
  return (
    <footer className="mt-3 text-center bg-info text-white">
      <h6>&copy;{new Date().getFullYear()}</h6>
    </footer>
  );
};

export default Footer;
