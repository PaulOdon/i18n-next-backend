import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
	const { t } = useTranslation();

	return (
		<>
			<select
				name="language"
				onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
					i18n.changeLanguage(event.target.value);
				}}
			>
				<option value="en">Anglais</option>
				<option value="fr">Français</option>
			</select>
			<p>{t("SchemaDeTransport")}</p>
		</>
	);
}

export default App;
