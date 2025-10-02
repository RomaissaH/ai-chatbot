import { ChatBubbleLeftEllipsisIcon, UserGroupIcon, DocumentTextIcon, BoltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t, i18n } = useTranslation();

  const features = [
    {
      name: t('features.multiModel'),
      description: t('features.multiModelDesc'),
      icon: BoltIcon,
    },
    {
      name: t('features.chatHistory'),
      description: t('features.chatHistoryDesc'),
      icon: DocumentTextIcon,
    },
    {
      name: t('features.userSummaries'),
      description: t('features.userSummariesDesc'),
      icon: UserGroupIcon,
    },
    {
      name: t('features.bilingualSupport'),
      description: t('features.bilingualSupportDesc'),
      icon: ChatBubbleLeftEllipsisIcon,
    },
  ];

  return (
    <div className={`bg-white py-24 sm:py-32 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">{t('features.title')}</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {t('features.subtitle')}
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            {t('features.description')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
