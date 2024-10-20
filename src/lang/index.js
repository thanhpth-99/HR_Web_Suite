import { createI18n } from 'vue-i18n'
import vnMessage from './vn.json'
import enMessage from './en.json'

const messages = {
    vn: vnMessage,
    en: enMessage,
}

const i18n = createI18n({
    locale: 'vn',
    messages,
    fallbackLocale: 'vn',
})

export default i18n
