import React, { useEffect } from "react";
import { BodyContainer } from "./styled";

import AOS from "aos";
import "aos/dist/aos.css";

import "react-tooltip/dist/react-tooltip.css";
import * as Components from "./components";

export const App = () => {
  useEffect(() => {
    AOS.init({
      offset: -50,
      duration: 1200,
      easing: "ease",
    });
  }, []);

  return (
    <BodyContainer>
      <Components.Profile />
      <Components.Skills />
      <Components.Projects />
    </BodyContainer>
  );
};
