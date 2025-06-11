import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";

export async function GET (request) {

    const staff = await prisma.staff.findMany();

    return NextResponse.json(staff, { status: 200 });
}