import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '45653885481-kjmkrdbjhihd02mvkpl0ct4bsvb57drr.apps.googleusercontent.com',
      clientSecret: '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',
     // authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    // ...add more providers here
  ],
  pages:{
    signIn: "/auth/signin"
  },
  debug: true
})