import React, { useState } from "react";
import axios from "../api/axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Registerv2() {
  const { t } = useTranslation();
  const nav = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    if (form.password !== form.confirmPassword) {
      setError(t("auth.passwordMismatch"));
      return;
    }
    if (form.password.length < 8) {
      setError(t("auth.passwordTooShort"));
      return;
    }
    try {
      const payload = {
        username: form.username,
        email: form.email,
        password: form.password,
        confirm_password: form.confirmPassword,
      };
      const res = await axios.post("auth/register/", payload);
      const { tokens } = res.data;
      localStorage.setItem("access_token", tokens.access);
      localStorage.setItem("refresh_token", tokens.refresh);
      nav("/chat"); // redirect to chat or profile
    } catch (err) {
      setError(err.response?.data?.password || err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">{t("auth.signup")}</h2>
      {error && <div className="text-red-600 mb-3">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block">{t("auth.username")}</label>
          <input name="username" value={form.username} onChange={onChange} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block">{t("auth.email")}</label>
          <input name="email" value={form.email} onChange={onChange} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block">{t("auth.password")}</label>
          <input type="password" name="password" value={form.password} onChange={onChange} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block">{t("auth.confirmPassword")}</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={onChange} className="w-full border p-2 rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">{t("auth.submit")}</button>
      </form>
    </div>
  );
}