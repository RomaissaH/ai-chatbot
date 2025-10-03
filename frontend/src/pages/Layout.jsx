import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Layout() {
	const { t } = useTranslation();

	return (
		<>
			{/* Navigation */}
			<nav className="bg-white shadow-md">
				<div className="container mx-auto flex justify-between items-center py-4 px-6">
					<Link to="/" className="text-2xl font-bold text-blue-600">
						AI Chatbot
					</Link>
					<div className="flex items-center space-x-4">
						<Link to="/home" className="text-gray-700 hover:text-blue-600">
							{t("nav.home", "Home")}
						</Link>
						<Link to="/login" className="text-gray-700 hover:text-blue-600">
							{t("nav.login", "Login")}
						</Link>
						<Link to="/register" className="text-gray-700 hover:text-blue-600">
							{t("nav.register", "Register")}
						</Link>
						<LanguageSwitcher />
					</div>
				</div>
			</nav>
			
			<Outlet/>
		</>
	);
}