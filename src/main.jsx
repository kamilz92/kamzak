import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./context/LanguageContext";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      {" "}
      {/* Wrap your app with the LanguageProvider */}
      <App />
    </LanguageProvider>
  </StrictMode>
);
