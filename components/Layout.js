import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="overflow-hidden">
      <header></header>
      <main className="">{children}</main>
      <footer className="overflow-hidden">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
