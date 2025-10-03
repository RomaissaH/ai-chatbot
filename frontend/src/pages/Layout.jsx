import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Layout() {
	const { t, i18n } = useTranslation();
	const isRtl = i18n.language === 'ar';

	return (
		<div className={`min-h-screen flex flex-col ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
			{/* Navigation */}
			<nav className="bg-white shadow-md flex-shrink-0">
				<div className="container mx-auto flex justify-between items-center py-4 px-6">
					<Link 
						to="/" 
						className={`text-2xl font-bold text-blue-600 transition-colors duration-200 hover:text-blue-700 ${isRtl ? 'font-arabic' : ''}`}
					>
						{isRtl ? 'شات بوت الذكاء الاصطناعي' : 'AI Chatbot'}
					</Link>
					<div className={`flex items-center ${isRtl ? 'gap-2 sm:gap-4' : 'gap-2 sm:gap-4'}`}>
						<Link 
							to="/home" 
							className={`text-gray-700 hover:text-blue-600 text-sm sm:text-base transition-colors duration-200 px-2 py-1 rounded-md hover:bg-blue-50 ${isRtl ? 'font-arabic' : ''}`}
						>
							{t("nav.home", "Home")}
						</Link>
						<Link 
							to="/login" 
							className={`text-gray-700 hover:text-blue-600 text-sm sm:text-base transition-colors duration-200 px-2 py-1 rounded-md hover:bg-blue-50 ${isRtl ? 'font-arabic' : ''}`}
						>
							{t("nav.login", "Login")}
						</Link>
						<Link 
							to="/register" 
							className={`text-gray-700 hover:text-blue-600 text-sm sm:text-base transition-colors duration-200 px-2 py-1 rounded-md hover:bg-blue-50 ${isRtl ? 'font-arabic' : ''}`}
						>
							{t("nav.register", "Register")}
						</Link>
						<div className={`border-gray-300 border-s ps-2 sm:ps-4`}>
							<LanguageSwitcher />
						</div>
					</div>
				</div>
			</nav>
			
			{/* Main content area */}
			<main className="flex-1">
				<Outlet/>
			</main>
		</div>
	);
}