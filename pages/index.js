import React from "react";

// This file represents the root page of our app
// In Next.js file structure in the pages directory, mirrors how your URLs are structured in the browser
// In Next when you create hyperlinks to different pages within your site you use the Link component, Next tries to prefetch any links within the Link component

import Link from "next/link";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      {/* <Link
        prefetch={false}
        href={{ pathname: "/[username]", query: { username: "john123" } }}
      >
        <a>John&apos;s profile</a>
      </Link>
      <Loader show={false} /> */}
      <button onClick={() => toast.success("Hello toast!")}>Toast Me!</button>
    </div>
  );
}
