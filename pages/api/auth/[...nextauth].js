import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_KEY,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};


export default NextAuth(authOptions);