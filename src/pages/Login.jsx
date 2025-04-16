import "./login.css";
import { useLoginStore } from "../data/loginStore.js";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");
    const toggleAdmin = useLoginStore((state) => state.toggleAdmin);
    const admin = useLoginStore((state) => state.admin);
    const [valid, setValid] = useState("");
    const navigate = useNavigate();

    const handleLogIn = () => {
        if (password === "mums") {
            toggleAdmin();
            setError("");
            setValid("valid");
            navigate("/edit-menu"); 
        } else {
            setError("Fel lösenord.");
            setValid("invalid");
        }
        setPassword(null);
    };

    const handleLogOut = () => {
        if (admin) {
            toggleAdmin();
        }
    };

    const handleEnter = (e) => {
        if (e.key === "Enter" && !admin) {
            handleLogIn();
        }
    };

    return (
        <div className="login">
            <div className="login-box">
                {!admin ? (
                    <h3>Logga in för att ändra</h3>
                ) : (
                    <h3>Du är inloggad</h3>
                )}
                <p>{error}</p>
                <div className="input-box">
                    <input
                        className={valid}
                        type="password"
                        id="password"
                        placeholder="Lösenord"
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleEnter}
                        value={password || ""}
                    />
                    <button onClick={handleLogIn} disabled={!password || admin}>
                        Logga in
                    </button>
                    <button onClick={handleLogOut} disabled={!admin}>
                        Logga ut
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
