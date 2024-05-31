import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/firease";

export const authOptions = {
  pages: {
    signIn: '/log-in'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' }
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined, req: any): Promise<any> {
        if (!credentials) {
          throw new Error('No credentials provided');
        }
        try {
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
          if (userCredential.user) {
            return userCredential.user;
          }
          throw new Error('Authentication failed');
        } catch (error) {
          throw new Error(`Authentication failed: ${error.message}`);
        }
      }
    })
  ]
};

export default NextAuth(authOptions);