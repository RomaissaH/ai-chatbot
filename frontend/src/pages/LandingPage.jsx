import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function LandingPage() {
  const { t } = useTranslation();
  const isRtl = t("dir") === "rtl";   

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isRtl ? "text-right" : "text-left"}`}>
            {t("hero.title")}
          </h2>
          <p className={`${isRtl ? "text-right" : "text-left"} text-xl md:text-2xl mb-8`}>{t("hero.subtitle")}</p>
          <Link
            to="/register"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 inline-block"
          >
            {t("hero.cta", "Get Started")}
          </Link>
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
  

    </div>
  );
}

export default LandingPage;
