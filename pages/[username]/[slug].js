import React from "react";

// We can nest a dynamic route within a dynamic route
// This page is statically generated, BUT regenerated after new requests come in at an interval of 5000ms. If a prerendered page does not exist, will fallback to regular SSR.

export default function PostPage(props) {
  return (
    <main className={styles.container}>
      <p>OK</p>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);

  let post;
  let path;

  if (userDoc) {
    const postRef = userDoc.ref.collection("posts").doc(slug);
    post = postToJSON(await postRef.get());

    path = postRef.path;
  }

  return {
    props: { post, path },
    revalidate: 5000, // ISR - Will revalidate on every 5000 ms
  };
}

export async function getStaticPaths() {
  // Improve my using Admin SDK to select empty docs
  const snapshot = await firestore.collectionGroup("posts").get();

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return {
    // must be in this format:
    // paths: [
    //   { params: { username, slug }}
    // ],
    paths,
    fallback: "blocking", // When a user navigates to a page that hasn't been rendered yet, blocking tells Next to use SSR instead
  };
}
