import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma/prisma";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  role: z.string().min(3),
  about: z.string().min(3),
  email: z.string().email()
})

//Work zod validation into NextResponses with custom status code

export async function POST (request: { json: () => any; }) {
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

  const validatedData = schema.parse(staffData)

  const staff = await prisma.staff.create({
    data: {
      name: validatedData.name,
      email: validatedData.email,
      role: validatedData.role,
      about: validatedData.about,
    },
  });

  return NextResponse.json({ message: `Successfully added ${validatedData.email} to staff.`},{ status: 200 });
}