import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google"


export default NextAuth({
    
    providers: [
      // OAuth authentication providers
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      // Sign in with passwordless email link
      
    ],
    secret: process.env.NEXTAUTH_SECRET,
  })