"use client";

import { useState } from "react";
import QuestionsForm, { TInputs } from "./forms/questions-form ";
import Resume1 from "./components/resume-1";

export default function Home() {
  const [data, setData] = useState<TInputs>(() => {
    const userString = localStorage.getItem("user");

    return userString ? JSON.parse(userString) : {};
  });

  const handleDataChange = (newData: TInputs) => {
    setData(newData);
    localStorage.setItem("user", JSON.stringify(newData));
  };

  return (
    <div className="flex gap-4 m-6">
      <div className="w-full">
        <QuestionsForm onDataChange={handleDataChange} />
      </div>
      <div>
        <Resume1 data={data} />
      </div>
    </div>
  );
}
