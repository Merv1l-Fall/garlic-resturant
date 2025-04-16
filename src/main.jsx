
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router";
import "./index.css";
import App from "./App.jsx"; 
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import EditMenu from "./pages/EditMenu.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import AddMenuItem from "./pages/AddMenuItem.jsx";

const router = createHashRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: "/menu", Component: Menu },
            { path: "/edit-menu", Component: EditMenu },
            { path: "/add-menu-item", Component: AddMenuItem },
            { path: "/login", Component: Login },
            { path: "/checkout", Component: Checkout },
            
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
