import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import i18next from "i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";

i18next.use(HttpBackend).init<HttpBackendOptions>({
	debug: true,
	lng: "fr" as string,
	fallbackLng: "fr" as string,
	ns: "translation",
	load: "languageOnly",
	backend: {
		loadPath: `/locales/{{lng}}/{{ns}}.json`,
		addPath: `/locales/add/{{lng}}/{{ns}}.json`,
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
