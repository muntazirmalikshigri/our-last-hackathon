import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          // Connect to MongoDB
          await connectMongoDB();

          // Find user by email
          const user = await User.findOne({ email });

          if (!user) {
            console.log("User not found");
            throw new Error("Invalid email or password");
          }

          // Compare passwords
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            console.log("Invalid password");
            throw new Error("Invalid email or password");
          }

          // Return user object (excluding sensitive fields)
          return {
            id: user._id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("Error in authorize function:", error.message);
          throw new Error("Unable to authenticate user");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT-based sessions
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in .env
  pages: {
    signIn: "/", // Redirect to the home page for sign-in
    error: "/auth/error", // Custom error page
  },
  callbacks: {
    async jwt({ token, user }) {
      // Include user ID in the JWT token if user is authenticated
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the user data to the session
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
