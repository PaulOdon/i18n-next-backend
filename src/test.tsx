import React from "react";
import { useTranslation } from "react-i18next";

export default function Test() {
	const { t } = useTranslation();
	return (
		<div>
			{t("description")} <br />
		</div>
	);
}
