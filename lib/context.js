import { createContext } from "react";

// Context API allows you to share data throughout the component tree

// This value initializes the Context with the default values
export const UserContext = createContext({ user: null, username: null });
