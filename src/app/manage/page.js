"use client";

import Navbar from "../components/navbarAdmin/page";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addStaff } from "@/lib/axios/axios";

export default function manage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    about: "",
  });


  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
        [name]: value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStaff(formData);
    setFormData({
      name: "",
      email: "",
      role: "",
      about: "",
    })
  };

  const newStaff = useMutation({
    mutationFn: () => addStaff(formData),
    onSuccess: () => setSuccess("You have successfully updated the contact page with a new staff member.")
  });
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Welcome to the manager page.</h1>
        <p>Let's pretend you had to be an admin to reach this page so I feel less dirty about saving time for the sake of this assignment.</p>
        <p>Here you can add new people to the staff displayed on the contact page.</p>
        <form className="flex flex-col gap-2" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name:</label>
          <input 
            id="form-name" 
            value={formData.name}
            name="name" 
            className="p-2 rounded-xl border-2"
            onChange={(e) => handleInputChange(e)}
            />
          <label htmlFor="email">Email:</label>
          <input 
            id="form-email" 
            value={formData.email}
            name="email" 
            className="p-2 rounded-xl border-2"
            onChange={(e) => handleInputChange(e)}
            />
          <label htmlFor="role">Role:</label>
          <input 
            id="form-role" 
            value={formData.role}
            name="role" 
            className="p-2 rounded-xl border-2"
            onChange={(e) => handleInputChange(e)}
            />
          <label htmlFor="about">About:</label>
          <input 
            id="form-about" 
            value={formData.about}
            name="about"
            className="p-2 rounded-xl border-2"
            onChange={(e) => handleInputChange(e)}
            />
          <button className="border-1 rounded-xl bg-blue-500 p-2 font-bold">Submit</button>
        </form>
        {success? <p className="bg-green-500 rounded-xl p-2">{success}</p> : null}
      </main>
    </div>
  )
};