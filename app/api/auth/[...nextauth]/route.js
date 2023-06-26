import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "Email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     const res = await fetch("/your/endpoint", {
    //       method: "POST",
    //       body: JSON.stringify(credentials),
    //       headers: { "Content-Type": "application/json" },
    //     })
    //     const user = await res.json()
    //     console.log(req)

    //     // If no error and we have user data, return it
    //     if (res.ok && user) {
    //       return user
    //     }
    //     // Return null if user data could not be retrieved
    //     return null
    //   },
    // }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
