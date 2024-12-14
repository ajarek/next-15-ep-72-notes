/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@/lib/models"
import connectToDb from "@/lib/connectToDb"
import bcrypt from "bcryptjs"

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  pages: {
    error: "/register",
  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "#0E78F9", // Hex color code
    logo: "/logo.png", // Absolute URL to image
    buttonText: "#ffffff", // Hex color code
  },

  providers: [
    CredentialsProvider({
      name: "Credential",
      credentials: {
        username: { type: "text", required: true },
        password: { type: "password", required: true },
      },

      async authorize(credentials: any) {
        await connectToDb()
        try {
          const user = await User.findOne({ username: credentials.username })
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )
            if (isPasswordCorrect) {
              return user
            }
          }
        } catch (err) {
          throw new Error(err instanceof Error ? err.message : String(err))
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.username,
          admin: user.isAdmin,
          image: user.img,
        }
      }
      return token
    },
    async session({ session, token }: any) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          admin: token.admin,
          image: token.image,
        },
      }
    },

    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
})
