import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_SECRET; // phải khớp với .env

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    // chỉ server-side upsert
    await streamClient.upsertUsers([userData]);
    const token = streamClient.createToken(userData.id.toString());
    return { user: userData, token };
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};


export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};