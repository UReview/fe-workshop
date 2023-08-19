import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserProvider from "@/context/useUserContext.tsx";
import Login from "./routes/Login.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./routes/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Root />,
  },
  {
    path: "/login",
    Component: () => <Login />,
  },
  {
    path: "/profile",
    Component: () => <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
