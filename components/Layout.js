import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="">
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Layout;
