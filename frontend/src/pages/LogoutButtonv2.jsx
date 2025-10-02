// src/components/LogoutButton.jsx
import React from "react";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { t } = useTranslation();
  const nav = useNavigate();

  const logout = async () => {
    const refresh = localStorage.getItem("refresh_token");
    try {
      // optional: call backend to blacklist refresh
      await axios.post("auth/logout/", { refresh });
    } catch (e) {
      // ignore errors — proceed clearing tokens
    } finally {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      nav("/login");
    }
  };

  return (
    <button onClick={logout} className="px-3 py-1 border rounded">
      {t("auth.logout")}
    </button>
  );
}
