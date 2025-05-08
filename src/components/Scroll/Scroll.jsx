import React, { useEffect } from "react";
import { useLocation } from "react-router";

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables animated scroll
    });
  }, [pathname]);

  return null;
};

export default Scroll;
