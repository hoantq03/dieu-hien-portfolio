export type Locale = 'vi' | 'en'

export type ProjectContent = {
  id: string
  title: string
  category: string
  year: string
  industry: string
  tool: string
  client: string
  summary: string
  challenge: string
  solution: string
  cover: string
  gallery: string[]
  liveUrl?: string
}

export type Dictionary = {
  hero: {
    line1: string
    line2: string
    scroll: string
  }
  about: {
    label: string
    headline: string
    body: string
  }
  projects: {
    label: string
    intro: string
    view: string
  }
  projectModal: {
    close: string
    more: string
    client: string
    year: string
    industry: string
    tool: string
    details: string
    workDone: string
    skills: string
    gallery: string
  }
  stats: {
    label: string
    headline: string
    items: { value: string; label: string }[]
  }
  cta: {
    title: string
    copy: string
    projects: string
    about: string
    contact: string
  }
  clients: {
    titleLine1: string
    titleLine2: string
  }
  footer: {
    talk: string
    address: string
    phone: string
    email: string
    addressValue: string
  }
  partners: string[]
  projectsList: ProjectContent[]
}
