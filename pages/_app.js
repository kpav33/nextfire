import "../styles/globals.css";

// _app.js is a main entry point for any page in the application, it's like a wrapper or layout that surrounds other pages
// You can use it to add UI components that are available on every page, like a Navbar or Footer or use it for managing authentication state on the front end

import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  console.log(userData);

  return (
    // By wrapping the app with the Provider we will give all components access to the Context values
    // We can overwrite the default context values
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
