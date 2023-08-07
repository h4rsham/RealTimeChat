import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined); // user is undefined by default (not logged in)

  if (!user) { // if user is undefined (not logged in), show AuthPage
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else { // if user is defined (logged in), show ChatsPage
    return <ChatsPage user={user} />;
  }
}

export default App;