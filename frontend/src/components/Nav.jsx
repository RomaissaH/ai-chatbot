import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";  

export default function Navbar() {
  const { t, i18n } = useTranslation();

  //const [lang, setLang] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const links = [
    { name: t("navbar.home"), to: "/" },
    { name: t("navbar.features"), to: "/features" },
    { name: t("navbar.about"), to: "/about" },
    { name: t("navbar.chatbot"), to: "/chatbot" },
    {/*{name: t("navbar.login"), to: "/login" }*/},
    { name: t("navbar.register"), to: "/register" },
  ];

  return (
    <header className="bg-white shadow-md fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-6 py-4 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="text-xl font-bold text-blue-600">
            AI Chatbot
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex lg:gap-x-8">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm font-semibold text-gray-700 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Language Toggle */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {i18n.language === "en" ? "العربية" : "English"}
          </button>
        </div>
         <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
            >
              {t("navbar.login")}
            </Link>
          </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Chatbot
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-4 py-6">
                {links.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="py-6 flex flex-col gap-2">
                  <Link
                    to="/login"
                    className="rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>

              {/* Language toggle inside mobile menu */}
              <div className="py-6">
                <button
                  onClick={() => {
                    toggleLang();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full rounded-lg px-3 py-2.5 bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                  {i18n.language === "en" ? "العربية" : "English"}
                </button> 
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
