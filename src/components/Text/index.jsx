import React from "react";
import { TextNormal, TextGradient } from "./styled";

export const TextNormalComponent = ({
  children,
  color,
  size,
  italic,
  weight,
}) => {
  return (
    <TextNormal color={color} size={size} italic={italic} weight={weight}>
      {children}
    </TextNormal>
  );
};

export const TextGradientComponent = ({ children, size, weight }) => {
  return (
    <TextGradient size={size} weight={weight}>
      {children}
    </TextGradient>
  );
};
