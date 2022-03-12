import React from "react";

// You can also apply the square brackets that mark a dynamic routes to directories not just to files
// In this case this means that any route that we navigate to beyond the route URL will render this component
// This does not conflict with any other static routes, because Next will give preference to any routes that already exists in a static form versus the dynamic routes that this file represents

export default function UserProfilePage() {
  return <div>UserProfilePage</div>;
}
