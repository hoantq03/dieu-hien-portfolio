import { useLanguage } from '../i18n/LanguageContext'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-btn${locale === 'vi' ? ' is-active' : ''}`}
        onClick={() => setLocale('vi')}
        aria-pressed={locale === 'vi'}
      >
        VI
      </button>
      <span className="lang-divider" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`lang-btn${locale === 'en' ? ' is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}
