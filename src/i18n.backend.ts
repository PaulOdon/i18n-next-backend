// src/i18n.ts
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
		},
		lng: "en",
		fallbackLng: "en",
		debug: true,
		interpolation: {
			escapeValue: false, // Ne pas échapper les valeurs HTML dans les traductions
		},
	});

export default i18n;
