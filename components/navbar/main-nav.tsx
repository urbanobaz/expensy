"use client"

import * as React from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import styles from "./navbar.module.css"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { data: session } = useSession()
  return (
    <div className={cn(styles.navbar, "flex gap-6 md:gap-10")}>
      <Link
        href={session ? "/dashboard" : "/"}
        className="flex items-center space-x-2"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className={cn(styles.navbarLinks, "flex gap-6")}>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
