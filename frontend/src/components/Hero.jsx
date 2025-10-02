import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Home() {

  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/register"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
                {t("hero.cta")}
            </Link>
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
            >
                {t("hero.already have an account?")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
