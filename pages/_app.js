import "../styles/globals.css";

// _app.js is a main entry point for any page in the application, it's like a wrapper or layout that surrounds other pages
// You can use it to add UI components that are available on every page, like a Navbar or Footer or use it for managing authentication state on the front end

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
