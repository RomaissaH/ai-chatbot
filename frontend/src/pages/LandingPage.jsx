import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";  
import Hero from "../components/Hero";  

function LandingPage() {
  const { t } = useTranslation();
const isRtl = t("dir") === "rtl";   

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">AI Chatbot</h1>
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-gray-700 hover:text-blue-600">
              {t("nav.login")}
            </a>
            <a href="/register" className="text-gray-700 hover:text-blue-600">
              {t("nav.register")}
            </a>
            <a href="/chat" className="text-gray-700 hover:text-blue-600">
              {t("nav.chatbot")}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isRtl ? "text-right" : "text-left"}`}>
            {t("hero.title")}
          </h2>
          <p className={`${isRtl ? "text-right" : "text-left"} text-xl md:text-2xl mb-8`}>{t("hero.subtitle")}</p>
          <a
            href="/register"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            {t("hero.cta")}
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">{t("features.title")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2">{t("features.feature1.title")}</h4>
              <p>{t("features.feature1.desc")}</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2">{t("features.feature2.title")}</h4>
              <p>{t("features.feature2.desc")}</p>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2">{t("features.feature3.title")}</h4>
              <p>{t("features.feature3.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-3xl font-bold mb-6">{t("about.title")}</h3>
          <p className="text-lg leading-relaxed">{t("about.desc")}</p>
        </div>
      </section>
      <h1> Hello</h1>
     { /*<Hero />*/}  

    </div>
  );
}

export default LandingPage;
