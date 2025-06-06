import { initReactI18next } from 'react-i18next'
import i18next, { InitOptions } from 'i18next'
import Backend from 'i18next-http-backend'

const availableLanguages = ['pt-BR', 'en-US']

const translationOptions: InitOptions = {
  lng: 'pt-BR',
  load: 'currentOnly',
  preload: availableLanguages,
  debug: false,
  supportedLngs: availableLanguages,
  fallbackLng: 'pt-BR',
  defaultNS: 'common',
  ns: ['common', 'exceptions'],
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
}

export default i18next.use(Backend).use(initReactI18next).init(translationOptions)
