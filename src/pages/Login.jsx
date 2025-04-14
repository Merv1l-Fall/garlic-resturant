import "./login.css";
import { useLoginStore } from "../data/loginStore.js";
import { useState } from "react";

const Login = () => {
    const [password, setPassword] = useState(null);
    const toggleAdmin = useLoginStore((state) => state.toggleAdmin);
    const admin = useLoginStore((state) => state.admin);

    const handleLogIn = () => {
        if (password === "mums") {
            toggleAdmin();
        }
        setPassword(null);
    };

    const handleLogOut = () => {
        if (admin) {
            toggleAdmin();
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
                <div className="input-box">
                    <input
                        type="password"
                        id="password"
                        placeholder="Lösenord"
                        onChange={(e) => setPassword(e.target.value)}
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
