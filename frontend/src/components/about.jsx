import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <div className={`bg-gray-50 py-24 sm:py-32 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">{t('about.title')}</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {t('about.subtitle')}
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            {t('about.description')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">{t('about.privacy.title')}</h3>
            <p className="mt-2 text-gray-600">{t('about.privacy.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">{t('about.features.title')}</h3>
            <p className="mt-2 text-gray-600">{t('about.features.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">{t('about.support.title')}</h3>
            <p className="mt-2 text-gray-600">{t('about.support.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
