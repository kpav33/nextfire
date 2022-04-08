/* eslint-disable @next/next/no-img-element */
import React from "react";

import { auth } from "../lib/firebase";

// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <img
        src={user.photoURL || "/hacker.png"}
        className="card-img-center"
        alt="user"
      />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
      <SignOutButton />
    </div>
  );
}

// Sign out button
function SignOutButton() {
  return (
    <button
      onClick={() => auth.signOut()}
      style={{ width: "150px", margin: "0 auto" }}
    >
      Sign Out
    </button>
  );
}
