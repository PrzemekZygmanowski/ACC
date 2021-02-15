import React from "react";
import { DialogT } from "./interfaces/interfaces";
import CSS from "csstype";

const DialogStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  backgroundColor: "#fff",
  boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
  padding: "3%",
  width: "90vw",
  height: "90vh",
  top: "5%",
  left: "5%",
  bottom: "5%",
  borderRadius: "10px",
  transition: "0.3s ease-in-out"
};

const Dialog = ({ className, children }: DialogT) => {
  return (
    <div style={DialogStyle} className={className}>
      {children}
    </div>
  );
};
export default Dialog;
