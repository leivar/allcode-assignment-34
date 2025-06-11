import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";

export async function POST (request) {
  const staffData = await request.json();

  if(!staffData.name){
    return NextResponse.json({ message: "Name cannot be empty."}, {status: 401 });
  }
  if(!staffData.email){
    return NextResponse.json({ message: "Email cannot be empty."}, {status: 401 });
  }
  if(!staffData.role){
    return NextResponse.json({ message: "Role cannot be empty."}, {status: 401 });
  }
  if(!staffData.about){
    return NextResponse.json({ message: "Name cannot be empty."}, {status: 401 });
  }

  const staff = await prisma.staff.create({
    data: {
      name: staffData.name,
      email: staffData.email,
      role: staffData.role,
      about: staffData.about,
    },
  });

  return NextResponse.json({ message: "Successfully added staff member."},{ status: 200 });
}