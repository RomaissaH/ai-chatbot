import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section className={`bg-gray-100 py-20 ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6">{t('about.title')}</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            {t('about.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-semibold mb-2 text-indigo-600">
              {t('about.privacy.title')}
            </h4>
            <p className="text-gray-600">
              {t('about.privacy.description')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-semibold mb-2 text-indigo-600">
              {t('about.features.title')}
            </h4>
            <p className="text-gray-600">
              {t('about.features.description')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-semibold mb-2 text-indigo-600">
              {t('about.support.title')}
            </h4>
            <p className="text-gray-600">
              {t('about.support.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
