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
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
        },
      })
    },
    { scope: root },
  )

  return (
    <section className="section-about padding-global" id="who-am-i" ref={root}>
      <div className="text-meta section-label about-reveal">{t.about.label}</div>
      <h2 className="about-headline about-reveal">{t.about.headline}</h2>
      <div className="about-copy-offset about-reveal">
        <p className="paragraph-xlarge text-grey about-copy">{t.about.body}</p>
      </div>
    </section>
  )
}
