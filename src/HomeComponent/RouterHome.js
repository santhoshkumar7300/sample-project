import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import HeaderComponent from "../Components/HeaderComponent";

export default function RouterHome() {
  let location = useLocation();

  useEffect(
    (e) => {
      window.scrollTo(0, 0);
    },
    [location]
  );

  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
