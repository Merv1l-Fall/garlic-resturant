import "./App.css";
// import Menu from "./pages/Menu";
import EditMenu from "./pages/EditMenu";
import AddMenuItem from "./pages/AddMenuItem";
import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Header /> {/*Header*/}
            <main>
                <Outlet />

            </main>
        </div>
    );
}

export default App;
