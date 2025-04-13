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
            console.log(!admin);
            console.log("DU ÄR INNE");
        } else {
            console.log("FEEEEEEEl");
        }
        setPassword(null);
    };

    const handleLogOut = () => {
        if (admin) {
            toggleAdmin();
            console.log(!admin);
        } else {
            console.log("du är redan utloggad");
        }
    };

    return (
        <div className="login">
            <div className="login-box">
                <h3>Logga in för att ändra</h3>
                <div className="input-box">
                    <input
                        type="password"
                        id="password"
                        placeholder="Lösenord"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password || ""}
                    />
                    <button onClick={handleLogIn}>Logga in</button>
                    <button onClick={handleLogOut}>Logga ut</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
