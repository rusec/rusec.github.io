import client from "@/lib/mongodb";
import { Info } from "@/lib/types";

export async function getMotd(): Promise<Info> {
  let db = await client.db("rusec");
  let motd = await db
    .collection<Info>("motd")
    .find({})
    .sort({ lastUpdated: -1 })
    .limit(1)
    .toArray();
  return motd[0] as Info;
}
