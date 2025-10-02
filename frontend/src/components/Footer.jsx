// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Top navigation links */}
        <div className="flex justify-center space-x-6 mb-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Blog</a>
          <a href="#" className="hover:text-gray-900">Jobs</a>
          <a href="#" className="hover:text-gray-900">Press</a>
          <a href="#" className="hover:text-gray-900">Accessibility</a>
          <a href="#" className="hover:text-gray-900">Partners</a>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-6 mb-4 text-gray-600">
          <a href="https://facebook.com" className="hover:text-gray-900"><FaFacebook size={20} /></a>
          <a href="https://instagram.com" className="hover:text-gray-900"><FaInstagram size={20} /></a>
          <a href="https://x.com" className="hover:text-gray-900"><FaXTwitter size={20} /></a>
          <a href="https://linkedin.com" className="hover:text-gray-900"><FaLinkedin size={20} /></a>
          <a href="https://github.com" className="hover:text-gray-900"><FaGithub size={20} /></a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI Chatbot. {t('footer.rights')} 
        </p>
      </div>
    </footer>
  );
}
