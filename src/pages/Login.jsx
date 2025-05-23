import "./login.css";
import { useLoginStore } from "../data/loginStore.js";
import { useState, useEffect } from "react";
import EditMenu from "./EditMenu.jsx";
import AddMenuItem from "./AddMenuItem.jsx";

const Login = () => {
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");
    const toggleAdmin = useLoginStore((state) => state.toggleAdmin);
    const admin = useLoginStore((state) => state.admin);
    const addNew = useLoginStore((state) => state.addNew);
    const [valid, setValid] = useState("");

    const handleLogIn = () => {
        if (password === "mums") {
            toggleAdmin();
            setError("");
            setValid("valid");
        } else {
            setError("Fel lösenord.");
            setValid("invalid");
        }
        setPassword(null);
    };

    const handleEnter = (e) => {
        if (!password){
            setError("Fyll i lösenord.");
            setValid("invalid");

        }else if (e.key === "Enter" && !admin) {
            handleLogIn();
        }
    };

    return admin && addNew ? (
                <AddMenuItem />
            ) : admin ? (
                <EditMenu />
            ) : (
            <div className="login">
                <div className="login-box">
                    {!admin ? (
                        <h3>Logga in för att redigera menyn</h3>
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
                    </div>
                </div>
            </div>
        );
};

export default Login;
