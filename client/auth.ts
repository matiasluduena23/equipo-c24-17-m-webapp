import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GoogleProvider({
			// authorization: {
			// 	params: {
			// 		scope: "https://www.googleapis.com/auth/calendar.events",
			// 	},
			// },
		}),
	],
	callbacks: {
		async signIn({ profile }) {
			if (!profile?.email) {
				throw new Error();
			}

			//STORE IN DATABASE
			return true;
		},
		async session({ session, token }) {
			session.sessionToken = token.accessToken as string;
			return session;
		},
		// async jwt({ token, account }) {
		// 	if (account) {
		// 		token.accessToken = account.access_token;
		// 	}
		// 	return token;
		// },
	},
});
