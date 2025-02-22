import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

i18n
  .use(HttpBackend) // Load translation files from public folder
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Default language
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      }
    }
  });

export default i18n;
