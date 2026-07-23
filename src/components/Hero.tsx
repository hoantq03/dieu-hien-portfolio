import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '../i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const nameWords = [[...'NGUYỄN'], [...'THỊ'], [...'DIỆU'], [...'HIỀN']]

const boardRow1 = ['/img/board/1.jpg', '/img/board/2.jpg', '/img/board/3.jpg']
const boardRow2 = ['/img/board/4.jpg', '/img/board/5.jpg', '/img/board/6.jpg']

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const nameRowRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useGSAP(
    () => {
      const fitName = () => {
        const row = nameRowRef.current
        const heading = headingRef.current
        if (!row || !heading) return
        gsap.set(row, { scale: 1 })
        const available = heading.clientWidth
        const needed = row.scrollWidth
        const scale = needed > 0 ? Math.min(1, available / needed) : 1
        gsap.set(row, { scale, transformOrigin: 'left center' })
      }

      gsap.set('.hero-image', { opacity: 0, scale: 1.2 })
      gsap.set('.hero-eyebrow-line', { yPercent: 100 })
      gsap.set('.letter', { y: 48, opacity: 0 })
      gsap.set('.scroll-btn', { yPercent: 120 })

      fitName()
      void document.fonts?.ready.then(() => fitName())
      window.addEventListener('resize', fitName)

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })

      intro
        .to('.hero-image', {
          opacity: 1,
          scale: 1,
          duration: 1.6,
        })
        .to(
          '.hero-eyebrow-line',
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          '-=1.1',
        )
        .to(
          '.letter',
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.035,
          },
          '-=0.55',
        )
        .to(
          '.scroll-btn',
          {
            yPercent: 0,
            duration: 0.8,
          },
          '-=0.45',
        )

      const mm = gsap.matchMedia()

      mm.add('(min-width: 992px)', () => {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.scroll-wrapper-height',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        })

        scrollTl
          .to(
            '.home-hero-grid',
            {
              scale: 0.42,
              borderRadius: 24,
              ease: 'none',
            },
            0,
          )
          .to(
            '.hero-overlay',
            {
              opacity: 0.15,
              ease: 'none',
            },
            0,
          )
          .to(
            ['.home-hero-content', '.hero-text-wrapper'],
            {
              opacity: 0,
              y: -40,
              ease: 'none',
            },
            0,
          )
          .to(
            '.project-board-row-1',
            {
              xPercent: 8,
              ease: 'none',
            },
            0,
          )
          .to(
            '.project-board-row-2',
            {
              xPercent: -8,
              ease: 'none',
            },
            0,
          )
          .fromTo(
            '.image-board-wrapper',
            { scale: 0.92, opacity: 0.65 },
            { scale: 1, opacity: 1, ease: 'none', stagger: 0.02 },
            0,
          )
      })

      return () => {
        window.removeEventListener('resize', fitName)
        mm.revert()
      }
    },
    { scope: root },
  )

  return (
    <section className="section-hero" ref={root}>
      <div className="scroll-wrapper-height">
        <div className="scroll-wrapper-sticky">
          <div className="project-board-grid" aria-hidden="true">
            <div className="project-board-row project-board-row-1">
              {boardRow1.map((src) => (
                <div className="image-board-wrapper" key={src}>
                  <img className="image-board" src={src} alt="" />
                </div>
              ))}
            </div>
            <div className="project-board-row project-board-row-2">
              {boardRow2.map((src) => (
                <div className="image-board-wrapper" key={src}>
                  <img className="image-board" src={src} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="home-hero-grid">
            <div className="hero-image-wrapper">
              <img
                className="hero-image"
                src="/img/hero.png"
                alt="Woman Fashion Photography"
              />
              <div className="hero-overlay" />
            </div>

            <div className="home-hero-content">
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-line">{t.hero.line1}</div>
              </div>
              <div className="hero-eyebrow" style={{ marginTop: '0.15rem' }}>
                <div className="hero-eyebrow-line">{t.hero.line2}</div>
              </div>
            </div>

            <div className="hero-text-wrapper">
              <div className="grid-hero">
                <div
                  className="heading-hero-wrapper"
                  ref={headingRef}
                  aria-label="Nguyễn Thị Diệu Hiền"
                >
                  <div className="name-row" ref={nameRowRef}>
                    {nameWords.map((word, wordIndex) => (
                      <div className="name" key={`word-${wordIndex}`}>
                        {word.map((letter, letterIndex) => (
                          <div
                            className="letter-wrapper"
                            key={`${letter}-${wordIndex}-${letterIndex}`}
                          >
                            <h1 className="letter">{letter}</h1>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <a className="scroll-btn" href="#who-am-i">
                  <span>{t.hero.scroll}</span>
                  <img src="/img/ui/arrow-down.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
