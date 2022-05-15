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
    <div className="flex items-center">
      <h1 className="text-5xl font-black">The Human Kingdom</h1>
    </div>
  );
}

export default Navbar;
