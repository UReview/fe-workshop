class SpotifyClient {
  private accessToken: string | null;
  private baseUrl = "https://api.spotify.com";

  constructor() {
    // Get access token from session storage
    this.accessToken = sessionStorage.getItem("accessToken") || null;
  }

  /**
   * NOTE: Upon successful login to spotify, the user will be redirected back to a URI, which is our main app, and you'll notice that the URL has a hash fragment with the access token and other information. This is the access token that we'll use to make requests to the Spotify API.
   * READMORE - https://developer.spotify.com/documentation/web-api/tutorials/code-flow
   */
  public loginUser(): void {
    // This creates url query parameters for the Spotify login page
    const paramStr = new URLSearchParams({
      // These values are stored in the .env file

      // The client ID is used to identify the application
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,

      // The redirect URI is where the user will be redirected after logging in
      redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,

      // The scopes are the permissions that the application will have
      response_type: "token",
    });

    // Redirect to the Spotify login page with the required parameters
    // window is a global object that represents the browser window
    window.location.replace(
      `https://accounts.spotify.com/authorize?${paramStr}`
    );
  }

  public setAccessToken(token: string) {
    // Set access token to session storage
    sessionStorage.setItem("accessToken", token);
    // Set access token to class property
    this.accessToken = token;
  }

  public useAPI(
    method: "GET" | "POST" | "PUT" | "DELETE",
    resource: string,
    queryParams?: URLSearchParams
  ) {
    switch (method) {
      case "GET":
        return this.GET(resource, queryParams);
    }
  }

  private GET<T>(resource: string, queryParams?: URLSearchParams): Promise<T> {
    // If there are query parameters, append them to the resource
    if (queryParams) {
      resource += `?${queryParams.toString()}`;
    }

    const fullUrl = this.baseUrl + resource;

    return fetch(fullUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    }).then((res) => res.json());
  }
}

const SpotifyClientInstance = new SpotifyClient();

export default SpotifyClientInstance;
