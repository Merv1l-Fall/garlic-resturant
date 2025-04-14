import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header"; 

function App() {
    return (
        <div>
            <Header /> {/*Header*/}
            <main>
                <Outlet /> {/*Home och Menu */}
            </main>
        </div>
    );
}

export default App;

