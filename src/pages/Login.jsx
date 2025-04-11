import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="login-box">
                <h3>Logga in för att ändra</h3>
                <input type="text" id="password" placeholder="Lösenord" />
                <button>Logga in</button>
            </div>
        </div>
    );
};

export default Login;
