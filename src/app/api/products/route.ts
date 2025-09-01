import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const list = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(list);
}
