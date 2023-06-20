import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserSigninForm } from "@/components/user-signin-form"

import styles from "./Signup.module.css"

export default function SignupPage() {
  return (
    <div
      className={cn(
        styles.signinContainer,
        "container relative items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
      )}
    >
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url(/money.jpg)",
          }}
        />
      </div>
      <div className="flex h-full justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign up for an account
            </h1>
          </div>
          <UserSigninForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
