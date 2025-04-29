import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import React from "react";

const mockPatient = {
  name: "Chamika Ayya",
  email: "chamika@example.com",
  joined: "2023-01-15",
  avatar: "https://via.placeholder.com/120x120?text=Avatar",
};

const PatientProfile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 flex flex-col items-center">
        <div className="bg-gray-100 rounded-xl shadow-md p-8 w-full flex flex-col items-center mb-8">
          <img
            src={mockPatient.avatar}
            alt="Patient Avatar"
            className="w-28 h-28 rounded-full mb-4 border-4 border-blue-200 object-cover"
          />
          <Typography label={mockPatient.name} variant="h2" className="mb-2" />
          <Typography label={mockPatient.email} variant="p" className="mb-1 text-gray-600" />
          <Typography label={`Joined: ${mockPatient.joined}`} variant="p1" className="text-gray-500" />
        </div>
        <Button
          label="See All Doctors"
          type="primary"
          className="w-full max-w-xs"
          onClick={() => (window.location.href = "/doctors")}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PatientProfile;
