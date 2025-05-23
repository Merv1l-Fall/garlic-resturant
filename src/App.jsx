import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header";
import useMenuStore from "./data/menuStore";
import { useEffect } from "react";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
	const {loadMenuItems} = useMenuStore();

	useEffect(() => {
		loadMenuItems();
	}, [loadMenuItems]);
    return (
        <div>
            <Header />
            <ScrollToTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
