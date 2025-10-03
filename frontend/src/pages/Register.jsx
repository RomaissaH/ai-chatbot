import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    username: "", 
    email: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setError(null);
    
    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError(t("auth.passwordMismatch", "Passwords do not match"));
      return;
    }
    if (formData.password.length < 8) {
      setError(t("auth.passwordTooShort", "Password must be at least 8 characters"));
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirmPassword,
      };
      
      const response = await axios.post("http://127.0.0.1:8000/api/register/", payload);
      console.log("Registration successful!", response.data);
      
      // Store tokens
      localStorage.setItem("accessToken", response.data.tokens.access);
      localStorage.setItem("refreshToken", response.data.tokens.refresh);
      
      // Redirect to home page
      navigate("/home");
    } catch (error) {
      console.log("Registration error:", error.response?.data);
      
      if (error.response && error.response.data) {
        // Handle specific error messages from backend
        const errorData = error.response.data;
        if (errorData.password) {
          setError(errorData.password[0]);
        } else if (errorData.email) {
          setError(errorData.email[0]);
        } else if (errorData.username) {
          setError(errorData.username[0]);
        } else if (errorData.error) {
          setError(errorData.error);
        } else {
          setError("Registration failed. Please try again.");
        }
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-full">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t("auth.signup", "Create your account")}
          </h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-800">{error}</div>
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                {t("auth.username", "Username")}
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={t("auth.usernamePlaceholder", "Enter your username")}
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t("auth.email", "Email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={t("auth.emailPlaceholder", "Enter your email")}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t("auth.password", "Password")}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={t("auth.passwordPlaceholder", "Enter your password")}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                {t("auth.confirmPassword", "Confirm Password")}
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={t("auth.confirmPasswordPlaceholder", "Confirm your password")}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? t("auth.loading", "Creating account...") : t("auth.submit", "Create account")}
            </button>
          </div>
          
          <div className="text-center">
            <span className="text-sm text-gray-600">
              {t("auth.haveAccount", "Already have an account?")}{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                {t("auth.signIn", "Sign in")}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}