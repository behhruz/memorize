import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GoogleOAuthProvider clientId="589121976428-n5litpl2t7nn5ph1bq6ebaqmk6rh7m8b.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </Router>
);
reportWebVitals();
