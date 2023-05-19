import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/index.scss";
import { StoreProvider } from "./app/providers/StoreProvider/index.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <StoreProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </StoreProvider>
    </BrowserRouter>
);
