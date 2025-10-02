import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ar')}>العربية</button>
    </div>

    {/*<div className="flex space-x-2">
      <button onClick={() => changeLanguage("en")} className="px-2 py-1 border rounded">
        EN
      </button>
      <button onClick={() => changeLanguage("ar")} className="px-2 py-1 border rounded">
        AR
      </button>
    </div>*/}
    </>
  );
}

export default LanguageSwitcher;