import React from "react";
import Spinner from "../components/spinner";
import { useEffect } from "react";

const LogoutPage = (props) => {
  useEffect(() => {
   localStorage.removeItem("session");
   window.location.href='/';
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default LogoutPage;
