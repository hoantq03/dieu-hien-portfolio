import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import type { ProjectContent } from '../i18n/types'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const { t } = useLanguage()
  const [active, setActive] = useState<ProjectContent | null>(null)

  useEffect(() => {
    document.body.classList.toggle('modal-open', Boolean(active))
    return () => document.body.classList.remove('modal-open')
  }, [active])

  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  useEffect(() => {
    setActive(null)
  }, [t.projects.label])

  return (
    <section className="section-projects padding-global" id="projects">
      <div className="text-meta section-label">{t.projects.label}</div>
      <p className="projects-intro paragraph-xlarge text-grey">{t.projects.intro}</p>
      <div className="projects-list">
        {t.projectsList.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => setActive(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setActive(project)
              }
            }}
          >
            <div className="project-card-media">
              <img src={project.cover} alt={project.title} />
            </div>
            <div className="project-card-gradient" />
            <div className="project-card-content">
              <div className="project-card-top">
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-tags">
                  <span className="project-tag">{project.category}</span>
                  <span className="project-tag">{project.year}</span>
                </div>
              </div>
              <div className="project-card-bottom">
                <span className="view-project-btn">
                  {t.projects.view}
                  <img src="/img/ui/arrow-right.svg" alt="" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
