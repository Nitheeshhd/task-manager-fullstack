import { useState } from "react";
import Login from "./login";
import Dashboard from "./Dashboard";

function App() {
  const [token, setToken] = useState("");

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Dashboard token={token} />
      )}
    </div>
  );
}

export default App;