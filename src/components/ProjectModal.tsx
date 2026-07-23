import { useLanguage } from '../i18n/LanguageContext'
import type { ProjectContent } from '../i18n/types'

type Props = {
  project: ProjectContent | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  const { t } = useLanguage()
  const open = Boolean(project)
  const m = t.projectModal

  return (
    <>
      <div
        className={`project-backdrop${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <div
        className={`project-modal${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label={project?.title ?? m.details}
      >
        {project && (
          <div className="project-modal-inner">
            <div className="project-modal-actions">
              <button className="pill-btn close" onClick={onClose}>
                {m.close}
                <img src="/img/ui/close.svg" alt="" />
              </button>
              {project.liveUrl ? (
                <a className="pill-btn" href={project.liveUrl} target="_blank" rel="noreferrer">
                  {m.more}
                  <img src="/img/ui/arrow-right.svg" alt="" />
                </a>
              ) : null}
            </div>

            <div className="project-modal-hero">
              <img src={project.cover} alt={project.title} />
            </div>

            <div className="project-modal-heading">
              <div>
                <h2>{project.title}</h2>
                <p className="paragraph-xlarge text-grey" style={{ marginTop: '1.5rem' }}>
                  {project.summary}
                </p>
              </div>
              <dl className="project-meta-grid">
                <div>
                  <dt>{m.client}</dt>
                  <dd>{project.client}</dd>
                </div>
                <div>
                  <dt>{m.year}</dt>
                  <dd>{project.year}</dd>
                </div>
                <div>
                  <dt>{m.industry}</dt>
                  <dd>{project.industry}</dd>
                </div>
                <div>
                  <dt>{m.tool}</dt>
                  <dd>{project.tool}</dd>
                </div>
              </dl>
            </div>

            <div className="project-details-block">
              <div className="text-meta">{m.details}</div>
              <div className="project-details-cols">
                <div>
                  <h4>{m.workDone}</h4>
                  <p className="text-grey">{project.challenge}</p>
                </div>
                <div>
                  <h4>{m.skills}</h4>
                  <p className="text-grey">{project.solution}</p>
                </div>
              </div>
            </div>

            <div className="project-gallery">
              <div className="text-meta">{m.gallery}</div>
              <div className="project-gallery-grid">
                {project.gallery.map((src) => (
                  <img key={src} src={src} alt={`${project.title} gallery`} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
