import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavigateToHome = ({ hash }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.hash = hash;
    navigate("/");
  }, [hash, navigate]);

  return null;
};

export default NavigateToHome;
