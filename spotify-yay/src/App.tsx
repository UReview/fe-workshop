import { useEffect } from "react";
import { Button, Heading } from "@chakra-ui/react";
import SpotifyClientInstance from "./utils/SpotifyClient";
import { BsSpotify } from "react-icons/bs";
import LoginLayout from "./layouts/LoginLayout";

function App() {
  useEffect(() => {
    // Check url params for access token because Spotify redirects here after login
    const params = new URLSearchParams(window.location.hash);
    const accessToken = params.get("#access_token");

    // If there's an access token, store it to session storage and redirect to remove it from the url
    // Okay to leave it there because it's only valid for a short time + it's not a secret at this point
    if (accessToken) {
      SpotifyClientInstance.setAccessToken(accessToken);
    }
  });

  return (
    <LoginLayout>
      <Heading>Experience music all over again</Heading>
      <Button
        onClick={() => {
          SpotifyClientInstance.loginUser();
        }}
        leftIcon={<BsSpotify />}
      >
        Log into Spotify
      </Button>
    </LoginLayout>
  );
}

export default App;
