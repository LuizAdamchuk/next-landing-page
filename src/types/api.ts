export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: Array<{
    title: string
    icon: {
      alternativeText: string
      url: string
    }
  }>
}
export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}
export type SectionModulesProps = {
  title: string
  modules: Array<{
    id: string
    title: string
    subtitle: string
    description: string
  }>
}
export type SectionAgendaProps = {
  title: string
  description: string
}
export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}
export type SectionAboutUsProps = {
  title: string
  authors: Array<{
    id: string
    name: string
    photo: {
      alternativeText: string
      url: string
    }
    role: string
    socialLinks: Array<{
      id: string
      title: string
      url: string
    }>
    description: string
  }>
}
export type SectionReviewsProps = {
  title: string
  reviews: Array<{
    id: string
    name: string
    text: string
    photo: {
      alternativeText: string
      url: string
    }
  }>
}

export type SectionFaqProps = {
  title: string
  questions: Array<{
    id: string
    question: string
    answer: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
  pricingBox: PricingBoxProps
}
