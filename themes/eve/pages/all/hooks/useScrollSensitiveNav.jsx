import { useState, useEffect } from "react";

export function useScrollSensitiveNav() {
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY < 15  ? setNavColor("transparent") : setNavColor("white");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return { navColor };
}