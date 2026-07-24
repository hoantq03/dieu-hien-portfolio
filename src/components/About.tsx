import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function About() {
  const root = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useGSAP(
    () => {
      gsap.from('.about-reveal', {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
        },
      })
    },
    { scope: root, dependencies: [t.about.label] },
  )

  return (
    <section className="section-about padding-global" id="who-am-i" ref={root}>
      <div className="about-layout">
        <div className="about-intro">
          <div className="text-meta section-label about-reveal">{t.about.label}</div>
          <h2 className="about-headline about-reveal">{t.about.headline}</h2>
          <p className="paragraph-xlarge text-grey about-copy about-reveal">{t.about.body}</p>
        </div>

        <div className="about-experience">
          <div className="text-meta section-label about-reveal">{t.about.experienceLabel}</div>
          <ol className="experience-timeline">
            {t.about.experiences.map((item) => (
              <li className="experience-item about-reveal" key={`${item.org}-${item.period}`}>
                <div className="experience-marker" aria-hidden="true" />
                <div className="experience-content">
                  <time className="experience-period">{item.period}</time>
                  <h3 className="experience-org">{item.org}</h3>
                  <p className="experience-role">{item.role}</p>
                  <ul className="experience-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
