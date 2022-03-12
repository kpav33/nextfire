import React from "react";

// This file represents the root page of our app

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={{ pathname: "/[username]", query: { username: "john123" } }}>
        <a>John&apos;s profile</a>
      </Link>
    </div>
  );
}
