"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  profession: string;
  short_intro: string;
  email: string;
  linkedin: string;
  phone_number: string;
};

export default function QuestionsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-black p-6 border border-gray-400 rounded-lg">
        <div className="mb-4">
          <label htmlFor="name">
            What is your name? <span className="text-red-500">*</span>
          </label>
          <br />
          <input
            {...register("name", { required: true })}
            placeholder="Eg: xyz"
            id="name"
            className="border border-gray-400 px-2 py-1 my-1 rounded-md w-full"
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
            className="border border-gray-400 px-2 py-1 my-1 rounded-md w-full"
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
          <input
            {...register("short_intro", { required: true })}
            id="short_intro"
            className="border border-gray-400 px-2 py-1 my-1 rounded-md w-full"
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
            className="border border-gray-400 px-2 py-1 my-1 rounded-md w-full"
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
            className="border border-gray-400 px-2 py-1 my-1 rounded-md w-full"
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
            className="border border-gray-400 px-2 py-1 my-1 rounded-md w-full"
          />
          {errors.phone_number && (
            <span className="text-red-500">*Phone Number is required</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:opacity-50 text-white px-4 py-2 rounded-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
