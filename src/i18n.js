import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { RESOURCES } from "./resources";
import i18nBackend from "i18next-http-backend";

console.log(process.env.REACT_APP_URL_APP, "process.env.REACT_URL_APP 00");

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    lng: "en", // Default language
    fallbackLng: "en", // Language that will be loaded in case the translations the user is looking for are not available
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${process.env.REACT_APP_URL_APP}/i18n/{{lng}}.json`,
      //   "http://localhost:3000/i18n/{{lng}}.json"
    },
    //   resources: RESOURCES,
  });

export default i18n;
