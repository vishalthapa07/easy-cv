"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInputs>();

  const createEmptySkill = () => ({ skillName: "" });
  const createEmptyTool = () => ({ toolName: "" });
  const createEmptyExperience = (): TInputs["experiences"][number] => ({
    position: "",
    companyName: "",
    joinedDate: "",
    leftDate: "",
    shortDescription: "",
  });
  const createEmptyEducation = (): TInputs["education"][number] => ({
    course: "",
    institute: "",
    startDate: "",
    endDate: "",
  });

  const [skills, setSkills] = useState<{ skillName: string }[]>([
    createEmptySkill(),
  ]);
  const [tools, setTools] = useState<{ toolName: string }[]>([
    createEmptyTool(),
  ]);
  const [experiences, setExperiences] = useState<TInputs["experiences"]>([
    createEmptyExperience(),
  ]);
  const [educations, setEducations] = useState<TInputs["education"]>([
    createEmptyEducation(),
  ]);

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    data.skills = skills;
    data.tools = tools;
    data.experiences = experiences;
    data.education = educations;
    onDataChange(data);
    resetForm();
  };

  const resetForm = () => {
    reset();
    setSkills([createEmptySkill()]);
    setTools([createEmptyTool()]);
    setExperiences([createEmptyExperience()]);
    setEducations([createEmptyEducation()]);
  };

  const addSkill = () => setSkills([...skills, createEmptySkill()]);
  const addTool = () => setTools([...tools, createEmptyTool()]);
  const addExperience = () =>
    setExperiences([...experiences, createEmptyExperience()]);
  const addEducation = () =>
    setEducations([...educations, createEmptyEducation()]);

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index].skillName = value;
    setSkills(newSkills);
  };

  const handleToolChange = (index: number, value: string) => {
    const newTools = [...tools];
    newTools[index].toolName = value;
    setTools(newTools);
  };

  const handleExperienceChange = (
    index: number,
    updatedExperience: TInputs["experiences"][number]
  ) => {
    const newExperiences = [...experiences];
    newExperiences[index] = updatedExperience;
    setExperiences(newExperiences);
  };

  const handleEducationChange = (
    index: number,
    updatedEducation: TInputs["education"][number]
  ) => {
    const newEducations = [...educations];
    newEducations[index] = updatedEducation;
    setEducations(newEducations);
  };

  const removeField = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setState: React.Dispatch<React.SetStateAction<any[]>>,
    index: number
  ) => {
    setState((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-black">
        {/* Basic Info Fields */}
        <div className="mb-4">
          <label htmlFor="name" className="font-bold text-lg">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name", { required: true })}
            placeholder="Eg: xyz"
            id="name"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
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
            placeholder="Eg: Software Engineer"
            id="profession"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.profession && (
            <span className="text-red-500">*Profession is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="short_intro" className="font-bold text-lg">
            Short Introduction <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("short_intro", { required: true })}
            placeholder="A brief introduction about yourself"
            id="short_intro"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.short_intro && (
            <span className="text-red-500">*Short intro is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="font-bold text-lg">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", { required: true })}
            placeholder="Eg: example@mail.com"
            id="email"
            type="email"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.email && (
            <span className="text-red-500">*Email is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="linkedin" className="font-bold text-lg">
            LinkedIn Profile <span className="text-red-500">*</span>
          </label>
          <input
            {...register("linkedin", { required: true })}
            placeholder="Your LinkedIn URL"
            id="linkedin"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.linkedin && (
            <span className="text-red-500">*LinkedIn is required</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone_number" className="font-bold text-lg">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone_number", { required: true })}
            placeholder="Eg: +1234567890"
            id="phone_number"
            className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
          />
          {errors.phone_number && (
            <span className="text-red-500">*Phone number is required</span>
          )}
        </div>

        {/* Skills Section */}
        <div className="shadow-md rounded-md p-4 mb-8">
          <label className="font-bold text-lg">
            Skills <span className="text-red-500">*</span>
          </label>
          {skills.map((skill, index) => (
            <div key={index} className="mb-1">
              <input
                value={skill.skillName}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                placeholder="Eg: Microsoft Word"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {skill.skillName === "" && (
                <span className="text-red-500 text-lg">*Skill is required</span>
              )}

              <IoMdRemoveCircle
                className="text-red-600 cursor-pointer"
                onClick={() => removeField(setSkills, index)}
              />
            </div>
          ))}
          <div className="flex justify-center">
            <IoMdAddCircle
              className="text-red-600 hover:opacity-70 my-2 cursor-pointer"
              onClick={addSkill}
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className="shadow-md rounded-md p-4 mb-8">
          <label className="font-bold text-lg">
            Tools and Technology <span className="text-red-500">*</span>
          </label>
          {tools.map((tool, index) => (
            <div key={index} className="mb-1">
              <input
                value={tool.toolName}
                onChange={(e) => handleToolChange(index, e.target.value)}
                placeholder="Eg: React"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
              />
              {tool.toolName === "" && (
                <span className="text-red-500 text-lg">*Tool is required</span>
              )}
              <IoMdRemoveCircle
                className="text-red-600 cursor-pointer"
                onClick={() => removeField(setTools, index)}
              />
            </div>
          ))}
          <div className="flex justify-center">
            <IoMdAddCircle
              className="text-red-600 hover:opacity-70 my-2 cursor-pointer"
              onClick={addTool}
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="shadow-md rounded-md p-4 mb-8">
          <label className="font-bold text-lg">
            Experience <span className="text-red-500">*</span>
          </label>
          {experiences.map((experience, index) => (
            <div key={index} className="my-4 p-6 rounded-lg shadow-md">
              <input
                value={experience.position}
                onChange={(e) =>
                  handleExperienceChange(index, {
                    ...experience,
                    position: e.target.value,
                  })
                }
                placeholder="Position"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <input
                value={experience.companyName}
                onChange={(e) =>
                  handleExperienceChange(index, {
                    ...experience,
                    companyName: e.target.value,
                  })
                }
                placeholder="Company Name"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <input
                value={experience.joinedDate}
                onChange={(e) =>
                  handleExperienceChange(index, {
                    ...experience,
                    joinedDate: e.target.value,
                  })
                }
                placeholder="Joined Date"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <input
                value={experience.leftDate}
                onChange={(e) =>
                  handleExperienceChange(index, {
                    ...experience,
                    leftDate: e.target.value,
                  })
                }
                placeholder="Left Date"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <textarea
                value={experience.shortDescription}
                onChange={(e) =>
                  handleExperienceChange(index, {
                    ...experience,
                    shortDescription: e.target.value,
                  })
                }
                placeholder="Short Description"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <IoMdRemoveCircle
                className="text-red-600 cursor-pointer"
                onClick={() => removeField(setExperiences, index)}
              />
            </div>
          ))}
          <div className="flex justify-center">
            <IoMdAddCircle
              className="text-red-600 hover:opacity-70 my-2 cursor-pointer"
              onClick={addExperience}
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="shadow-md rounded-md p-4 mb-8">
          <label className="font-bold text-lg">
            Education <span className="text-red-500">*</span>
          </label>
          {educations.map((education, index) => (
            <div key={index} className="my-4 p-6 rounded-lg shadow-md">
              <input
                value={education.course}
                onChange={(e) =>
                  handleEducationChange(index, {
                    ...education,
                    course: e.target.value,
                  })
                }
                placeholder="Course"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <input
                value={education.institute}
                onChange={(e) =>
                  handleEducationChange(index, {
                    ...education,
                    institute: e.target.value,
                  })
                }
                placeholder="Institute"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <input
                value={education.startDate}
                onChange={(e) =>
                  handleEducationChange(index, {
                    ...education,
                    startDate: e.target.value,
                  })
                }
                placeholder="Start Date"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <input
                value={education.endDate}
                onChange={(e) =>
                  handleEducationChange(index, {
                    ...education,
                    endDate: e.target.value,
                  })
                }
                placeholder="End Date"
                className="border border-gray-400 px-2 py-2 my-1 rounded-md w-full"
                required
              />
              <IoMdRemoveCircle
                className="text-red-600 cursor-pointer"
                onClick={() => removeField(setEducations, index)}
              />
            </div>
          ))}
          <div className="flex justify-center">
            <IoMdAddCircle
              className="text-red-600 hover:opacity-70 my-2 cursor-pointer"
              onClick={addEducation}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-resumeBlue_1 hover:opacity-70 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
