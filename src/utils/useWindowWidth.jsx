import { useState, useEffect, useDebugValue } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set a custom label for the value displayed in React Developer Tools
  useDebugValue(`Window width: ${width}`);

  return { width };
}
