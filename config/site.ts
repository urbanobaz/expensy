export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Expensy",
  description: "An intuitive way to keep track of your finances.",
  mainNav: [
    {
      title: "Income",
      href: "/income",
    },
    {
      title: "Expense",
      href: "/expense",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
