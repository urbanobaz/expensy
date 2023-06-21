export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Expensy",
  description: "An intuitive way to keep track of your finances.",
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Add Income",
      href: "/add-income",
    },
    {
      title: "Add Expense",
      href: "/add-expense",
    },
  ],
  links: {
    signup: "/sign-up",
    signin: "/sign-in",
  },
}
