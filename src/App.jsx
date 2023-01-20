import React, { useEffect } from "react";
import { BodyContainer } from "./styled";

import AOS from "aos";
import "aos/dist/aos.css";

import "react-tooltip/dist/react-tooltip.css";
import * as Components from "./components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  useEffect(() => {
    AOS.init({
      offset: -50,
      duration: 1200,
    });
  }, []);

  return (
    <BodyContainer>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Components.Profile />
      <Components.Skills />
      <Components.Projects />
      <Components.Contact />
      <Components.Navigator />
      <Components.Footer />
    </BodyContainer>
  );
};
