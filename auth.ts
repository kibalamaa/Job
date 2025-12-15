import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const res = await fetch(
            "https://akil-backend.onrender.com/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const data = await res.json();
          console.log("LOGIN STATUS:", res.status);
          console.log("LOGIN RESPONSE:", data);

          if (!res.ok || !data?.data?.accessToken) {
            throw new Error(data?.message || "Login failed");
          }


          return {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            role: data.data.role,
            // JWT
            accessToken: data.data.accessToken, 
            refreshToken: data.data.refreshToken,
            profileComplete: data.data.profileComplete,
            profileStatus: data.data.profileStatus,
          };
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).accessToken;
        token.role = (user as any).role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        (session as any).accessToken = token.accessToken;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },
});
