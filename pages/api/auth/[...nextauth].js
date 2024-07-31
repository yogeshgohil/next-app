import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: "Iv23liNKlPpFR6XDMR4q",
      clientSecret: "895aa32ba9d85bcace3cdfd31e8bb14c74e7e93b",
    }),
  ],
};


export default NextAuth(authOptions);