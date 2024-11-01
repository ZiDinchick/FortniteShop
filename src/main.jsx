import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Shop } from "./components/shop.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header />
        <Shop />
        <Footer />
    </StrictMode>
);
