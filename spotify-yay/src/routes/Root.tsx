import { UserContext } from "@/context/useUserContext";
import { useContext, useEffect } from "react";

const Root = () => {
  const [user, _] = useContext(UserContext);

  useEffect(() => {
    // If user is not logged in, redirect to login page
    if (!user) {
      window.location.href = "/login";
    }
  });
  return <></>;
};

export default Root;
