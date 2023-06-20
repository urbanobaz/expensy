export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Expensy",
  description: "An intuitive way to keep track of your finances.",
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  links: {
    signup: "/sign-up",
    signin: "/sign-in",
  },
}
