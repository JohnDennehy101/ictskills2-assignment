import React from "react";
import Spinner from "../components/spinner";
import { useEffect } from "react";

const LogoutPage = () => {
  useEffect(() => {
    async function deleteSession() {
      let sessionId;
      sessionId = localStorage.getItem("session");
      localStorage.removeItem("session");
      localStorage.removeItem("guest-session");
      localStorage.removeItem("accountId");
      window.location.href = "/";
    }

    deleteSession();
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default LogoutPage;
