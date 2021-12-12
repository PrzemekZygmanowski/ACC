import React from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateToPrevPage = () => {
  const navigate = useNavigate();

  return navigate(-1);
};
