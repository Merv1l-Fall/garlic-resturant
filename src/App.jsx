import "./App.css";
import EditMenu from "./pages/EditMenu";
import AddMenuItem from "./pages/AddMenuItem";
import { Outlet } from "react-router";
import Header from "./components/Header";
import useMenuStore from "./data/menuStore";
import { useEffect } from "react";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";

function App() {
	const {loadMenuItems} = useMenuStore();

	useEffect(() => {
		loadMenuItems();
	}, [loadMenuItems]);
    return (
        <div>
            <Header />
            <main>
                <Outlet />

            </main>
            <Footer />
        </div>
    );
}

export default App;
