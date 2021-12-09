import React from "react";
import { DialogT } from "./interfaces/interfaces";
import CSS from "csstype";

const HelpDialogS: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  backgroundColor: "#fff",
  boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
  padding: "3%",
  width: "80vw",
  height: "80vh",
  borderRadius: "10px",
  transition: "0.3s ease-in-out"
};

export const HelpDialog = ({ className, children }: DialogT) => {
  return (
    <div style={HelpDialogS} className={className}>
      {children}
    </div>
  );
};
