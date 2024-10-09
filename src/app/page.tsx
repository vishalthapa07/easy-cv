"use client";

import { useState, useEffect } from "react";
import Resume1 from "./components/resume-1";
import QuestionsForm, { TInputs } from "./forms/questions-form ";
import Head from "next/head";
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
    <>
      <Head>
        <title>Create Your Perfect CV for Free | Easy CV Online Builder</title>
        <meta
          name="description"
          content="Design a professional CV effortlessly with our free online CV builder. Choose from customizable templates, add your details, and download your CV in minutes. Start your job application journey today!"
        />
      </Head>
      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
      <div className="pb-12">
        <FloatingDockContact />
      </div>
    </>
  );
}
