import React from "react";
import { Tag } from "./styled";

export const TagScript = ({ size, children, closed, open }) => {
  return (
    <Tag size={size} closed={closed} open={open}>
      <span>{`${closed ? "</ " : "< "}`}</span>
      {children}
      <span>{` >`}</span>
    </Tag>
  );
};
