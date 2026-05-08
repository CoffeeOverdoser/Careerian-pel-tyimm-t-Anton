import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/mainsivu.module.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(
      (user) => user.username === username
    );

    if (userExists) {
      alert("User already exists");
      return;
    }

    users.push({
      username,
      password,
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Register</h1>

        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={styles.newBtn} onClick={handleRegister}>
          Register
        </button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}