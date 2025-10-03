import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';

  const toggleLanguage = () => {
    const newLanguage = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="relative inline-flex items-center">
      {/* Language Toggle Switch */}
      <button
        onClick={toggleLanguage}
        className={`
          group relative inline-flex h-8 w-14 items-center justify-center rounded-full 
          transition-all duration-300 ease-in-out focus:outline-none 
          focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white
          shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95
          ${isArabic 
            ? 'bg-blue-600 hover:bg-blue-700' 
            : 'bg-gray-300 hover:bg-gray-400'
          }
        `}
        aria-label={`Switch to ${isArabic ? 'English' : 'Arabic'}`}
        title={`Switch to ${isArabic ? 'English' : 'العربية'}`}
      >
        {/* Toggle */}
        <span
          className={`
            absolute inline-block h-6 w-6 transform rounded-full 
            bg-white shadow-lg transition-all duration-300 ease-in-out
            group-hover:shadow-xl
            ${isArabic ? 'translate-x-3' : '-translate-x-3'}
          `}
        >
          <span className={`
            absolute inset-0 flex items-center justify-center text-xs font-bold
            transition-all duration-300
            ${isArabic ? 'text-blue-600 font-arabic' : 'text-gray-700'}
          `}>
            {isArabic ? 'ع' : 'EN'}
          </span>
        </span>
      </button>
      
      <span className={`ms-2 text-sm font-medium text-gray-600 hidden md:inline ${isArabic ? 'font-arabic' : ''}`}>
        {isArabic ? 'العربية' : 'English'}
      </span>
    </div>
  );
}

export default LanguageSwitcher;