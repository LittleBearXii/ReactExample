import Axios from "../helper/Axios";

function loginAsync(credentials: Record<"password" | "username", string>) {
  return fetch("https://www.mecallapi.com/api/login", {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" }
  });
}

function authenticationAsync() {
  return Axios.post('/api/auth/callback/credentials');
}

export default {
  loginAsync,
  authenticationAsync
}