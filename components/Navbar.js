import React, { useEffect, useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 300) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);
  return (
    <div
      className={`w-screen fixed p-5 h-20 z-20 bg-gradient-to-b from-black  flex ${
        show === false ? "visible" : "invisible"
      } transition-all duration-200`}
    >
      <h1 className="text-5xl font-black">The Human Kingdom</h1>
    </div>
  );
}

export default Navbar;
