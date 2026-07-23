import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Stats() {
  const root = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useGSAP(
    () => {
      gsap.from('.stats-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
        },
      })
    },
    { scope: root },
  )

  return (
    <section className="section-stats padding-global" ref={root}>
      <div className="text-meta section-label stats-reveal">{t.stats.label}</div>
      <h2 className="stats-headline stats-reveal">{t.stats.headline}</h2>
      <div className="stats-grid">
        {t.stats.items.map((stat) => (
          <div className="stat-item stats-reveal" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
