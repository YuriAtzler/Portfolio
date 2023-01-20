import React from "react";
import { NavigatorContainer } from "./styled";

import { FaHome, FaBook, FaBusinessTime, FaPhoneAlt } from "react-icons/fa";

export const Navigator = () => {
  return (
    <NavigatorContainer>
      <a href="#profile">
        <FaHome color="#ececec" size={30} />
      </a>
      <a href="#skills">
        <FaBook color="#ececec" size={30} />
      </a>
      <a href="#projects">
        <FaBusinessTime color="#ececec" size={30} />
      </a>
      <a href="#contact">
        <FaPhoneAlt color="#ececec" size={30} />
      </a>
    </NavigatorContainer>
  );
};
