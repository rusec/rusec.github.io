import { verify } from "@/lib/jwt";
import client from "@/lib/mongodb";
import Joi from "joi";
import { WithId } from "mongodb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Info } from "@/lib/types";
export const dynamic = 'force-static';
export async function GET(request: Request) {
  let db = await client.db("rusec");
  let motd = await db
    .collection("motd")
    .find({})
    .sort({ lastUpdated: 1 })
    .limit(1)
    .toArray();
  return NextResponse.json(motd[0], {
    status: 200,
  });
}

export type UpdateRequest = {
  motd: string;
  alert: string;
};
var UpdateRequestSchema = Joi.object<UpdateRequest>({
  motd: Joi.string().required(),
  alert: Joi.string().required(),
});

// Update stuff on the page
export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return NextResponse.json(
      { success: false },
      {
        status: 400,
      },
    );
  }
  const user = await verify(token); // Verify the JWT token
  if (!user.admin) {
    return NextResponse.json(
      { success: false },
      {
        status: 401,
      },
    );
  }

  let body = await request.json();
  let error = UpdateRequestSchema.validate(body);
  if (error.error) {
    return NextResponse.json(error, {
      status: 400,
      statusText: "Invalid Schema",
    });
  }

  let db = await client.db("rusec");
  await db
    .collection<Info>("motd")
    .insertOne({ ...body, lastUpdated: new Date().getTime() });
  return NextResponse.json(
    { success: true },
    {
      status: 200,
    },
  );
}
