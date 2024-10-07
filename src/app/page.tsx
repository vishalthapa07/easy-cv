"use client";

import { useState, useEffect } from "react";
import Resume1 from "./components/resume-1";
import QuestionsForm, { TInputs } from "./forms/questions-form ";

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

  console.log("data....", data);

  return (
    <div className="flex gap-4 m-6">
      <div className="w-2/5">
        <QuestionsForm onDataChange={handleDataChange} />
      </div>
      <div className="w-full">
        <Resume1 data={data} />
      </div>
    </div>
  );
}
