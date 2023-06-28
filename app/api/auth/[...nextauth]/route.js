import prisma from "@/prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session
    },
    async signIn({ profile }) {
      console.log(profile)
      try {
        // Check if user exists in database
        const user = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        })

        // if not, create a new user in the database
        if (!user) {
          const user = await prisma.user.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          })
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
