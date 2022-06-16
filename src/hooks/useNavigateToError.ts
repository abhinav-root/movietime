import React from "react";
import { useNavigate } from "react-router-dom";

const useNavigateToError = () => {
  const navigate = useNavigate();
  return () => {
    navigate("error");
  };
};

export default useNavigateToError;
