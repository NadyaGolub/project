import React from 'react';
import ReactDOM from 'react-dom/client';
// import i18n from 'i18next';

import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.css';




i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    debug: true,
        fallbackLng: "en",
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

function App() {
  const { t } = useTranslation()

  return <h2>{t('welcome_to_react')}</h2>
  }




ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
      </React.Suspense>
    </React.StrictMode>
   
);
