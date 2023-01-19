import React, { useState, useEffect } from "react";

export default function Hello() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return <div>{windowWidth}</div>;
}
