import { OAuth2Client } from "google-auth-library";
export const signInController = async (req, res) => {
  const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "postmessage"
  );

  const { tokens } = await oAuth2Client.getToken(req.body.code);
  console.log(tokens);

  res.json(tokens);
};
