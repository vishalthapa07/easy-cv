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
  tools: { toolName: string }[];
  experiences: {
    position: string;
    companyName: string;
    joinedDate: string;
    leftDate: string;
    shortDescription: string;
  }[];
  education: {
    course: string;
    institute: string;
    startDate: string;
    endDate: string;
  }[];
};

type Props = {
  onDataChange: (data: TInputs) => void;
};

export default function QuestionsForm({ onDataChange }: Props) {
  const [skills, setSkills] = useState([{ skillName: "" }]);
  const [tools, setTools] = useState([{ toolName: "" }]);
  const [experiences, setExperiences] = useState([
    {
      position: "",
      companyName: "",
      joinedDate: "",
      leftDate: "",
      shortDescription: "",
    },
  ]);

  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [leftDate, setLeftDate] = useState("");

  const [educations, setEducations] = useState([
    {
      course: "",
      institute: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [course, setCourse] = useState("");
  const [institute, setInstitute] = useState("");
  const [startDate, setStartDate] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    data.skills = skills;
    data.tools = tools;
    data.experiences = experiences;
    data.education = educations;
    onDataChange(data);
    resetForm();
    return null;
  };

  const resetForm = () => {
    reset();
    setSkills([{ skillName: "" }]); // Reset skills
    setTools([{ toolName: "" }]);
    setExperiences([
      {
        position: "",
        companyName: "",
        joinedDate: "",
        leftDate: "",
        shortDescription: "",
      },
    ]);
    setEducations([
      {
        course: "",
        institute: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const addSkill = () => {
    setSkills([...skills, { skillName: "" }]);
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index].skillName = value;
    setSkills(newSkills);
  };

  const addTool = () => {
    setTools([...tools, { toolName: "" }]);
  };

  const handleToolChange = (index: number, value: string) => {
    const newTools = [...tools];
    newTools[index].toolName = value;
    setTools(newTools);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        position: "",
        companyName: "",
        joinedDate: "",
        leftDate: "",
        shortDescription: "",
      },
    ]);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        course: "",
        institute: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleExperienceChange = (
    index: number,
    position: string,
    companyName: string,
    joinedDate: string,
    leftDate: string,
    shortDescription: string
  ) => {
    const newExperiences = [...experiences];
    newExperiences[index].position = position;
    newExperiences[index].companyName = companyName;
    newExperiences[index].joinedDate = joinedDate;
    newExperiences[index].leftDate = leftDate;
    newExperiences[index].shortDescription = shortDescription;
    setExperiences(newExperiences);
  };

  const handleEducationChange = (
    index: number,
    course: string,
    institute: string,
    startDate: string,
    endDate: string
  ) => {
    const newEducations = [...educations];
    newEducations[index].course = course;
    newEducations[index].institute = institute;
    newEducations[index].startDate = startDate;
    newEducations[index].endDate = endDate;
    setEducations(newEducations);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-black">
        <div className="mb-4">
          <label htmlFor="name" className="font-bold text-lg">
            Name <span className="text-red-500">*</span>
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
          <label htmlFor="profession" className="font-bold text-lg">
            Profession <span className="text-red-500">*</span>
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
          <label htmlFor="short_intro" className="font-bold text-lg">
            Short description about yourself{" "}
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
          <label htmlFor="email" className="font-bold text-lg">
            Email address <span className="text-red-500">*</span>
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
          <label htmlFor="linkedin" className="font-bold text-lg">
            LinkedIn profile <span className="text-red-500">*</span>
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
        <div className="mb-8">
          <label htmlFor="phone_number" className="font-bold text-lg">
            Phone number <span className="text-red-500">*</span>
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
        <div className="shadow-md rounded-md p-4 mb-8">
          <label htmlFor="skills" className="font-bold text-lg">
            Skills <span className="text-red-500">*</span>
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
              className="text-red-600 hover:opacity-70 my-2 cursor-pointer"
              onClick={addSkill}
            />
          </div>{" "}
        </div>
        <div className="shadow-md rounded-md p-4 mb-8">
          <label htmlFor="tools" className="font-bold text-lg">
            Tools and Technology <span className="text-red-500">*</span>
          </label>
          {tools.map((tool, index) => (
            <div key={index} className="mb-1">
              <input
                value={tool.toolName}
                onChange={(e) => handleToolChange(index, e.target.value)}
                placeholder="Eg: React"
                id="tools"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {tool.toolName === "" && (
                <span className="text-red-500 text-lg">*Tool is required</span>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <IoMdAddCircle
              className="text-red-500 hover:opacity-70 my-2 cursor-pointer"
              onClick={addTool}
            />
          </div>{" "}
        </div>
        <div className="shadow-md rounded-md p-4 mb-8">
          <label htmlFor="experiences" className="font-bold text-lg">
            Experience <span className="text-red-500">*</span>
          </label>
          {experiences.map((experience, index) => (
            <div key={index} className="my-4 p-6 rounded-lg shadow-md">
              <input
                value={experience.position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Enter your position"
                id="experiences"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {experience.position === "" && (
                <span className="text-red-500 text-lg">
                  *Position is required
                </span>
              )}
              <input
                value={experience.companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company name"
                id="experiences"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {experience.companyName === "" && (
                <span className="text-red-500 text-lg">
                  *Company is required
                </span>
              )}
              <input
                value={experience.joinedDate}
                onChange={(e) => setJoinedDate(e.target.value)}
                placeholder="Enter your joined date. Eg: 3rd October, 2024"
                id="experiences"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {experience.joinedDate === "" && (
                <span className="text-red-500 text-lg">
                  *Joined date is required
                </span>
              )}
              <input
                value={experience.leftDate}
                onChange={(e) => setLeftDate(e.target.value)}
                placeholder="Enter your left date. Eg: 3rd October, 2025"
                id="experiences"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {experience.leftDate === "" && (
                <span className="text-red-500 text-lg">
                  *Left date is required
                </span>
              )}
              <textarea
                value={experience.shortDescription}
                rows={3}
                onChange={(e) =>
                  handleExperienceChange(
                    index,
                    position,
                    companyName,
                    joinedDate,
                    leftDate,
                    e.target.value
                  )
                }
                placeholder="Enter your job short description"
                id="experiences"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {experience.shortDescription === "" && (
                <span className="text-red-500 text-lg">
                  *Job short description is required
                </span>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <IoMdAddCircle
              className="text-red-500 hover:opacity-70 my-2 cursor-pointer"
              onClick={addExperience}
            />
          </div>{" "}
        </div>

        <div className="shadow-md rounded-md p-4 mb-8">
          <label htmlFor="educations" className="font-bold text-lg">
            Education <span className="text-red-500">*</span>
          </label>
          {educations.map((education, index) => (
            <div key={index} className="my-4 p-6 rounded-lg shadow-md">
              <input
                value={education.course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter your course"
                id="educations"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {education.course === "" && (
                <span className="text-red-500 text-lg">
                  *Course is required
                </span>
              )}
              <input
                value={education.institute}
                onChange={(e) => setInstitute(e.target.value)}
                placeholder="Enter your institute"
                id="educations"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {education.institute === "" && (
                <span className="text-red-500 text-lg">
                  *Institute is required
                </span>
              )}
              <input
                value={education.startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Enter your start date. Eg: 3rd October, 2024"
                id="educations"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {education.startDate === "" && (
                <span className="text-red-500 text-lg">
                  *Start date is required
                </span>
              )}
              <input
                value={education.endDate}
                onChange={(e) =>
                  handleEducationChange(
                    index,
                    course,
                    institute,
                    startDate,
                    e.target.value
                  )
                }
                placeholder="Enter your left date. Eg: 3rd October, 2025"
                id="educations"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {education.endDate === "" && (
                <span className="text-red-500 text-lg">
                  *End date is required
                </span>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <IoMdAddCircle
              className="text-red-500 hover:opacity-70 my-2 cursor-pointer"
              onClick={addEducation}
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
