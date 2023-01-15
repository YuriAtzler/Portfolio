import React from "react";
import { Tag } from "./styled";

export const TagScript = ({ size, children, closed, open, right }) => {
  return (
    <Tag
      data-aos={right ? "fade-right" : "fade-left"}
      size={size}
      closed={closed}
      open={open}
    >
      <span>{`${closed ? "</ " : "< "}`}</span>
      {children}
      <span>{` >`}</span>
    </Tag>
  );
};
