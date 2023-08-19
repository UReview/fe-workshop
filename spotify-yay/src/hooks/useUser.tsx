import { User, UserContext } from "@/context/useUserContext";
import SpotifyClientInstance from "@/utils/SpotifyClient";
import { useState, useContext } from "react";

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [_, setUser] = useContext(UserContext);
  const [success, setSuccess] = useState(false);

  const getUser = () => {
    setIsLoading(true);
    SpotifyClientInstance.useAPI<User>("GET", "v1/me")
      ?.then((res: User) => {
        setUser(res);
        setIsLoading(false);
        setSuccess(true);
      })
      .catch((_) => {
        setError(true);
        setIsLoading(false);
      });
  };

  return { isLoading, error, success, getUser };
};

export default useUser;
