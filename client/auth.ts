import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	callbacks: {
		async signIn({ profile }) {
			if (!profile?.email) {
				throw new Error();
			}

			//STORE IN DATABASE
			return true;
		},
	},
});
