"use client";
import { useState } from "react";
import Navbar from "../components/navbarAdmin/page";
import { useQuery } from "@tanstack/react-query";
import { getStaff } from "@/lib/axios/axios";

export default function contact() {

  const staff = useQuery({
    queryKey: ['staff'],
    queryFn: getStaff
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>
          Welcome to the contact page. Here you can find an overciew of our staff and how to contact them.
        </h1>
        <section id="staff">
          {staff.isLoading ? <p>Loading..</p>:null}
          {staff.isSuccess? (
            <>
            {staff.data.length < 1 ? <p>No staff member added yet.</p>: null}
            {staff.data.map((member, index) => (
              <section className="bg-gray-700 p-4 rounded-xl" key={index}>
                <p className="text-white">{member.name}</p>
                <p>{member.email}</p>
                <p>{member.role}</p>
                <p>{member.about}</p>
              </section>
            ))}
            </>): null
          }
        </section>
      </main>
    </div>
  )
}