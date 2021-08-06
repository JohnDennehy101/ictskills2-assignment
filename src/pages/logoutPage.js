import React from "react";
import Spinner from "../components/spinner";
import { deleteUserSession } from "../api/tmdb-api";
import { useEffect } from "react";

const LogoutPage = (props) => {
  useEffect(() => {
    async function deleteSession() {
      let deleteSessionResponse, sessionId;
      sessionId = localStorage.getItem("session");

    //   deleteSessionResponse = await deleteUserSession(sessionId);
      localStorage.removeItem("session");
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
