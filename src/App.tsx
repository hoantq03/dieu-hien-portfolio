import { LanguageProvider } from './i18n/LanguageContext'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <LanguageProvider>
      <div className="page-wrapper">
        <LanguageSwitcher />
        <HomePage />
      </div>
    </LanguageProvider>
  )
}
