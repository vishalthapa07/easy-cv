"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMdAddCircle } from "react-icons/io";

export type TInputs = {
  name: string;
  profession: string;
  short_intro: string;
  email: string;
  linkedin: string;
  phone_number: string;
  skills: { skillName: string }[];
};

type Props = {
  onDataChange: (data: TInputs) => void;
};

export default function QuestionsForm({ onDataChange }: Props) {
  const [skills, setSkills] = useState([{ skillName: "" }]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    data.skills = skills;
    console.log(data);
    onDataChange(data);
    resetForm();
    return null;
  };

  const resetForm = () => {
    reset();
    setSkills([{ skillName: "" }]); // Reset skills
  };

  const addSkill = () => {
    setSkills([...skills, { skillName: "" }]);
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index].skillName = value;
    setSkills(newSkills);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-black p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name">
            What is your name? <span className="text-red-500">*</span>
          </label>
          <br />
          <input
            {...register("name", { required: true })}
            placeholder="Eg: xyz"
            id="name"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          <br />
          {errors.name && (
            <span className="text-red-500">*Name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="profession">
            What is your profession? <span className="text-red-500">*</span>
          </label>
          <input
            {...register("profession", { required: true })}
            placeholder="Eg: Software Developer"
            id="profession"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.profession && (
            <span className="text-red-500">*Profession is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="short_intro">
            Can you provide a short description about yourself?{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("short_intro", { required: true })}
            id="short_intro"
            rows={4}
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.short_intro && (
            <span className="text-red-500">*Short description is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email">
            What is your email address? <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", {
              required: true,
            })}
            placeholder="Eg: xyz@gmail.com"
            id="email"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.email && (
            <span className="text-red-500">*Email Address is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="linkedin">
            Please share your LinkedIn profile details.{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            {...register("linkedin", { required: true })}
            id="linkedin"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.linkedin && (
            <span className="text-red-500">*LinkedIn profile is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone_number">
            What is your phone number? <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone_number", { required: true })}
            placeholder="Eg: +977 98xxxxxxxx"
            id="phone_number"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.phone_number && (
            <span className="text-red-500">*Phone Number is required</span>
          )}
        </div>
        <div className="shadow-md rounded-md p-4 mb-4">
          <label htmlFor="skills">
            Please share your skills? <span className="text-red-500">*</span>
          </label>
          {skills.map((skill, index) => (
            <div key={index} className="mb-1">
              <input
                value={skill.skillName}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                placeholder="Eg: Microsoft Word"
                id="skills"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {skill.skillName === "" && (
                <span className="text-red-500 text-lg">*Skill is required</span>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <IoMdAddCircle
              className="text-red-500 hover:opacity-70 my-2 cursor-pointer"
              onClick={addSkill}
            />
          </div>{" "}
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:opacity-70 text-white px-4 py-2 rounded-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
