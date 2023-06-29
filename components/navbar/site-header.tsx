"use client"

import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown"
import { MainNav } from "@/components/navbar/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const { data: session } = useSession()
  const firstLetter = session?.user?.name?.charAt(0)
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 px-8 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src={session?.user?.image ? session?.user?.image : ""}
                      alt="user avatar"
                    />
                    <AvatarFallback>{firstLetter}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-[32px] mt-4 xl:mr-20">
                  <DropdownMenuItem>
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href={"/dashboard"}
                    >
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href={"/add-income"}
                    >
                      Add income
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      className={buttonVariants({ variant: "ghost" })}
                      href={"/add-expense"}
                    >
                      Add expense
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button
                      variant={"ghost"}
                      className="w-full pr-4"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => signIn("google")}>Sign in</Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
