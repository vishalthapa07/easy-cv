"use client";

import QuestionsForm from "./forms/questions-form ";

export default function Home() {
  return (
    <div className="flex gap-4 m-6">
      <div className="w-1/2">
        <QuestionsForm />
      </div>
      <div className="w-full">2</div>
    </div>
  );
}
