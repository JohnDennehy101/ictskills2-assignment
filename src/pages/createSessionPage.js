import React from "react";
import Spinner from "../components/spinner";
import { createUserSession, getUserAccount } from "../api/tmdb-api";
import { useEffect } from "react";

const CreateSessionPage = (props) => {
  useEffect(() => {
    async function manageUserSession() {
      let response, sessionId;
     
      if (!localStorage.getItem("session")) {
          response = await createUserSession();

         sessionId = response.session_id;
         localStorage.setItem("session", sessionId);
      } 
      else {
          sessionId = localStorage.getItem("session");
          await getUserAccount(sessionId);
      }

     
      window.location.href = "/movies";
    }

    manageUserSession();
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default CreateSessionPage;
