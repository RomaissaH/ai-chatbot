// src/components/Login.jsx
import React, { useState } from "react";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Loginv2() {
  const { t } = useTranslation();
  const nav = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("auth/login/", { username: form.username, password: form.password });
      const { tokens } = res.data;
      localStorage.setItem("access_token", tokens.access);
      localStorage.setItem("refresh_token", tokens.refresh);
      nav("/chat");
    } catch (err) {
      setError(t("auth.invalidCredentials"));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">{t("auth.login")}</h2>
      {error && <div className="text-red-600 mb-3">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block">{t("auth.username")}</label>
          <input name="username" value={form.username} onChange={onChange} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block">{t("auth.password")}</label>
          <input type="password" name="password" value={form.password} onChange={onChange} className="w-full border p-2 rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">{t("auth.submit")}</button>
      </form>
    </div>
  );
}
