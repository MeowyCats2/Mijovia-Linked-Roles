import { data, saveData } from "./dataMsg.ts";

export async function storeDiscordTokens(userId: string, tokens: any) {
  data[`discord-${userId}`] = tokens;
  await saveData();
}

export async function getDiscordTokens(userId: string) {
  return data[`discord-${userId}`];
}