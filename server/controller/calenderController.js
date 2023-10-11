import { google } from "googleapis";

export const getEvents = async (req, res) => {
  const accessToken =
    "ya29.a0AfB_byDDQUvbjwLRe6i1lGsW20KBorRIRqrXWadG3DVxZMLDV_14V29vgtmPOnZzx-sHlFhWlra2nVPW3zFvHWYSRgjyd_YW-cApM_B7vKI6EBoZnCSZCW8s03AhBGzTgQjj7zhONqIyzDPkkdCfuIJd3v_JIn8PCaUJaCgYKAXwSARASFQGOcNnCpiO8DkrK7bChxSiI2J0LVQ0171";
  const auth = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "postmessage"
  );
  auth.setCredentials({ access_token: accessToken });
  const calendar = google.calendar({
    version: "v3",
    auth,
  });

  // Define the start and end dates for your desired month
  const startDate = new Date("2023-10-01T00:00:00Z");
  const endDate = new Date("2023-10-31T23:59:59Z");

  // Fetch calendar events for the specified time range
  calendar.events.list(
    {
      calendarId: "primary", // Use 'primary' for the user's primary calendar
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    },
    (err, res) => {
      if (err) {
        console.error("Error fetching calendar events:", err);
        return;
      }
      const events = res.data.items;
      console.log("Calendar events:");
      events.forEach((event) => {
        console.log(event.summary, event.start.dateTime);
      });
    }
  );
};
