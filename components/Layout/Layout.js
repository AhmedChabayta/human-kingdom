import React from "react";
import Footer from "./Footer";


function Layout({ children }) {
  return (
    <div className="overflow-hidden h-screen">
      <header></header>
      <main className="">{children}</main>
      <footer className="overflow-hidden">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
