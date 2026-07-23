import { useLanguage } from '../i18n/LanguageContext'

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="section-cta">
      <img src="/img/cta-bg.png" alt="" />
      <div className="cta-inner">
        <h2>{t.cta.title}</h2>
        <p className="cta-copy">{t.cta.copy}</p>
        <div className="cta-links">
          <a className="cta-link" href="#projects">
            {t.cta.projects}
            <img src="/img/ui/arrow-right.svg" alt="" />
          </a>
          <a className="cta-link" href="#who-am-i">
            {t.cta.about}
            <img src="/img/ui/arrow-right.svg" alt="" />
          </a>
          <a className="cta-link" href="#contact">
            {t.cta.contact}
            <img src="/img/ui/arrow-right.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  )
}
