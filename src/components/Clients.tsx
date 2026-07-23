import { useLanguage } from '../i18n/LanguageContext'

export function Clients() {
  const { t } = useLanguage()
  const items = [...t.partners, ...t.partners]

  return (
    <section className="section-clients padding-global">
      <div className="clients-title">
        <h2>
          {t.clients.titleLine1}
          <br />
          {t.clients.titleLine2}
        </h2>
      </div>
      <div className="clients-track" aria-hidden="true">
        {items.map((name, index) => (
          <span className="client-name" key={`${name}-${index}`}>
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
