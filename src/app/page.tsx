"use client";

import { useState } from "react";
import QuestionsForm, { TInputs } from "./forms/questions-form ";

export default function Home() {
  const [data, setData] = useState(() => {
    const userString = localStorage.getItem("user");

    return userString ? JSON.parse(userString) : {};
  });

  const handleDataChange = (newData: TInputs) => {
    setData(newData);
    localStorage.setItem("user", JSON.stringify(newData));
  };

  return (
    <div className="flex gap-4 m-6">
      <div className="w-1/2">
        <QuestionsForm onDataChange={handleDataChange} />
      </div>
      <div className="w-full">
        <h1>{data.name}</h1>
      </div>
    </div>
  );
}
