import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import React, { useState } from "react";

// Mock doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Jane Doe",
    category: "Mental Wellness",
    title: "Understanding Anxiety: A Comprehensive Guide",
    description: "Learn how to manage anxiety effectively with practical strategies and insights.",
    image: "https://via.placeholder.com/300x180?text=Doctor+Photo",
    date: "11 Jan 2022",
    readTime: "5 min read",
  },
  {
    id: 2,
    name: "Dr. John Smith",
    category: "Mental Wellness",
    title: "The Importance of Mental Health Awareness",
    description: "Discover why mental health awareness is crucial for everyone in our society.",
    image: "https://via.placeholder.com/300x180?text=Doctor+Photo",
    date: "15 Feb 2022",
    readTime: "7 min read",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    category: "Awareness",
    title: "Coping Strategies for Stressful Times",
    description: "Effective techniques to manage stress and maintain your mental well-being.",
    image: "https://via.placeholder.com/300x180?text=Doctor+Photo",
    date: "20 Mar 2022",
    readTime: "6 min read",
  },
  {
    id: 4,
    name: "vinuka navod",
    category: "Awareness",
    title: "Coping Strategies for Stressful Times",
    description: "Effective techniques to manage stress and maintain your mental well-being.",
    image: "https://via.placeholder.com/300x180?text=Doctor+Photo",
    date: "20 Mar 2022",
    readTime: "6 min read",
  },
  // Add more mock doctors as needed
];

const categories = [
  "All",
  "Mental Wellness",
  "Self-Care Tips",
  "Community Stories",
  "Expert Advice",
];

export const DocList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDoctors =
    selectedCategory === "All"
      ? doctors
      : doctors.filter((doc) => doc.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <Typography label="Blog" variant="h6" className="text-gray-700 mb-2" />
          <Typography
            label="Explore Our Featured Insights"
            variant="h1"
            className="mb-2"
          />
          <Typography
            label="Dive into our latest mental health articles and resources."
            variant="p"
            className="text-gray-600 mb-6"
          />
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                label={cat}
                type={selectedCategory === cat ? "primary" : "default"}
                onClick={() => setSelectedCategory(cat)}
                className={
                  selectedCategory === cat
                    ? "border-blue-500"
                    : "border-gray-300"
                }
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <Typography
                  label={doc.category}
                  variant="h6"
                  className="text-gray-500 mb-1"
                />
                <Typography
                  label={doc.title}
                  variant="h4"
                  className="mb-2"
                />
                <Typography
                  label={doc.description}
                  variant="p"
                  className="mb-4 text-gray-700"
                />
                <div className="flex items-center mt-auto pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">
                        {doc.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <Typography
                        label={doc.name}
                        variant="p1"
                        className="font-semibold"
                      />
                      <Typography
                        label={`${doc.date}  •  ${doc.readTime}`}
                        variant="p1"
                        className="text-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocList;
