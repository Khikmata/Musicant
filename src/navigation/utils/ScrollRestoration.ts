import React from "react";
import { useLocation } from "react-router-dom";

export const ScrollRestoration = () => {
  const location = useLocation();

  React.useEffect(() => {
    // scroll to top on pathname change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};
