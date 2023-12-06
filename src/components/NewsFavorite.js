import React from "react";
import { auth } from "../config/firebase-config";

function NewsFavorite() {
  let user = auth.currentUser;
  return (
    <div>
      NewsFavorite
      <h1>{user == null ? "No User" : user.email}</h1>
    </div>
  );
}

export default NewsFavorite;
