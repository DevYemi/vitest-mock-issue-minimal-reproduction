import NextAuth, { NextAuthConfig } from "next-auth";





export const NextAuthOptions: NextAuthConfig = {
  providers: [],
  secret: "DummySecret",
  callbacks: {

    async jwt({ token }) {
      return token;
    },

    async session({ session }) {
      return session;
    },
  },
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(NextAuthOptions);
