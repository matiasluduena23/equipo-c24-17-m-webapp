import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import { auth as getAuthSession } from "@/auth";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const session = await getAuthSession();

	console.log({ session });
	if (!session) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	// Store the token securely in the backend session
	const auth = new google.auth.OAuth2();
	auth.setCredentials({ access_token: session.accessToken });

	try {
		const calendar = google.calendar({ version: "v3", auth });
		const event = {
			summary: "Test agregar evento",
			start: {
				dateTime: new Date("2025-02-19T10:00:00").toISOString(),
				timeZone: "America/New_York",
			},
			end: {
				dateTime: new Date("2025-02-19T11:00:00").toISOString(),
				timeZone: "America/New_York",
			},
		};

		const response = await calendar.events.insert({
			calendarId: "primary",
			requestBody: event,
		});

		console.log({ response });
		return res.status(200).json({ event: response.data });
	} catch (error) {
		console.error("Google API error:", error);
		return res.status(500).json({ message: "Error creating event" });
	}
}
