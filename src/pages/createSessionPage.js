import React from "react";
import Spinner from "../components/spinner";
import { createUserSession } from "../api/tmdb-api";
import { useEffect } from "react";



const CreateSessionPage = (props) => {
 
 useEffect(() => {
    async function fetchData() {
      let response = await createUserSession();

      let sessionId = response.session_id;

      localStorage.setItem("session", sessionId);
    }
    
    fetchData();
  }, []);

  return (
    <>
      
        <Spinner />
    </>
  );
};

export default CreateSessionPage;
