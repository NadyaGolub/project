import React from 'react';
import ReactDOM from 'react-dom/client';
// import i18n from 'i18next';

import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.css';
import LanguageFlags from 'components/LanguageFlags';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';



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
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
  })

  
function App() {
  const { t } = useTranslation()

  return <h2>{t('welcome_to_react')}</h2>
  }




ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    
      <LanguageFlags/>
      <App />
     
    </React.StrictMode>
   
);
