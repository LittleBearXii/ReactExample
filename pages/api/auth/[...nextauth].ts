import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import accountService from '../../../services/accountService'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const res = await accountService.loginAsync(credentials);
        const data = await res.json();

        if (data.status === "ok") {
          return data;
        }

        return null;
      }
    })
  ],
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
  callbacks: {
    async jwt({ token, user , account }) {
      if (account) {
          token.accessToken = account.access_token;

        if (user) {
          token.data = user;
        }
      }

      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.data = token.data;

      return session;
    }
  },
  pages: {
    signIn: "/signIn",
  }
})