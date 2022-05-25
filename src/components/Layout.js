import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div id="layout" className="w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
