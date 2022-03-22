import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUsername } from "../utils";
import "./Login.css";

function Login() {
  const [username, SetUsername] = useState("");
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="upper">
        <h1>Login</h1>
        <input
          className="text-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
        />
        <button
          className="button"
          onClick={() => {
            setUsername(username);
            navigate("/todo");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
