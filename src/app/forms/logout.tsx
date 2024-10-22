import React from "react";
import { doLogout } from "../actions";

const Logout = () => {
  return (
    <form action={doLogout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
