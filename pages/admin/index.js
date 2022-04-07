import React from "react";
import AuthCheck from "../../components/AuthCheck";

// To create a basic route you can either create a file with the name of the route or a directory followed by an index.js file
// This sort of a pages have 1 to 1 relationship, meaning one route points to one component => This are so-called static routes, but sometimes you need dynamic routes

export default function AdminPostsPage(props) {
  return (
    <main>
      <AuthCheck></AuthCheck>
    </main>
  );
}
