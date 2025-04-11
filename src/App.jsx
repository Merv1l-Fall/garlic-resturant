import "./App.css";
import Menu from "./pages/Menu";
import { Outlet } from "react-router";

function App() {
    return (
        <div>
            <header>
                <h1>KLYFTAN</h1>
                <nav></nav>
                <button>cart</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
