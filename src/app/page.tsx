"use client";

import { useState, useEffect } from "react";
import Resume1 from "./components/resume-1";
import QuestionsForm, { TInputs } from "./forms/questions-form ";

import React from "react";
import { Timeline } from "./components/ui/timeline";
import { FloatingDockContact } from "./components/contact";

export default function Home() {
  const [data, setData] = useState<TInputs>({
    name: "",
    profession: "",
    short_intro: "",
    email: "",
    linkedin: "",
    phone_number: "",
    skills: [{ skillName: "" }],
    tools: [{ toolName: "" }],
    experiences: [
      {
        position: "",
        companyName: "",
        joinedDate: "",
        leftDate: "",
        shortDescription: "",
      },
    ],
    education: [
      {
        course: "",
        institute: "",
        startDate: "",
        endDate: "",
      },
    ],
  });

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        setData(JSON.parse(userString));
      } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
      }
    }
  }, []);

  const handleDataChange = (newData: TInputs) => {
    setData(newData);
    localStorage.setItem("user", JSON.stringify(newData));
  };

  const timelineData = [
    {
      title: "Form",
      content: (
        <div>
          <QuestionsForm onDataChange={handleDataChange} />
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Resume Ready",
      content: (
        <div>
          <Resume1 data={data} />
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
      <div className="pb-12">
        <FloatingDockContact />
      </div>
    </div>
  );
}
