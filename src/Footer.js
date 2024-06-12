import React, { useContext } from "react";
import { Darkmode } from "./App";

const Footer = () => {
  const { isDark, setIsDark } = useContext(Darkmode);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </div>
  );
};

export default Footer;
