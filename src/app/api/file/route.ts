import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  return NextResponse.json({ name: "File Uploaded" });
}
