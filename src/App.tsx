import React from "react";
import { useSearchParams } from "react-router-dom";
import "./App.css";
import Test from "./test";
import { useTranslation } from "react-i18next";

function App() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { i18n } = useTranslation();
	const [searchParams, setSearchParams] = useSearchParams();
	const queryParameters = new URLSearchParams(window.location.search);
	const lang = queryParameters.get("lang");
	// const [language, setLanguage] = React.useState<"en" | "fr" | "de">(
	// 	lang as "en" | "fr" | "de"
	// );

	return (
		<>
			<select
				name="language"
				onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
					// setLanguage(event.target.value as "en" | "fr" | "de");
					setSearchParams({ lang: event.target.value });
					// i18next.changeLanguage(lang as string);
					i18n.changeLanguage("fr");
					window.location.reload();
				}}
			>
				<option value="en">anglais</option>
				<option value="fr">français</option>
				<option value="de">Deutch</option>
			</select>
			<p className="read-the-docs">Selected language {lang}</p>
			<Test />
		</>
	);
}

export default App;
