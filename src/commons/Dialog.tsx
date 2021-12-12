import React from "react";
import { DialogT } from "./interfaces/interfaces";
import CSS from "csstype";

const DialogStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  backgroundColor: "#fff",
  boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
  padding: "3%",
  width: "90vw",
  maxWidth: "800px",
  height: "90vh",
  margin: "0 auto",
  top: "5vh",
  bottom: "5vh",
  borderRadius: "10px",
  transition: "0.3s ease-in-out",
};

export const Dialog = ({ className, children }: DialogT) => {
  return (
    <div style={DialogStyle} className={className}>
      {children}
    </div>
  );
};
