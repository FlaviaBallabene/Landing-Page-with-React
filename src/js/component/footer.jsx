import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black", height: "50px", position: "fixed", bottom: "0", width: "100%", zIndex: "1000" }}>
      {/* Empty div for the line */}
      <div style={{ borderBottom: "1px solid gray" }}></div>
    </footer>
  );
};

export default Footer;
