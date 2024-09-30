import { TInputs } from "../forms/questions-form ";

const Resume1 = ({ data }: { data: TInputs }) => {
  return (
    <div className="w-full bg-white">
      <div className="bg-resumeBgLight_1 grid grid-cols-2 gap-16 p-12">
        <div>
          <h1 className="font-semibold text-2xl text-resumeBlack_1 mb-2">
            {data.name}
            <br />
          </h1>

          <h2 className="font-medium text-base text-resumeBlue_1 mb-4">
            {data.profession}
          </h2>
          <p className="text-sm text-resumeBlack_1 leading-relaxed">
            {data.short_intro}
          </p>
        </div>
        <div>
          <h3>
            <span className="font-medium text-xs text-resumeBlue_1">Email</span>{" "}
            <br />
            <span className="font-semibold text-xs text-resumeBlack_1 underline">
              {data.email}
            </span>{" "}
            <br />
          </h3>
          <h3>
            <span className="font-medium text-xs text-resumeBlue_1">
              LinkedIn
            </span>{" "}
            <br />
            <span className="font-semibold text-xs text-resumeBlack_1 underline">
              {data.linkedin}
            </span>{" "}
            <br />
          </h3>
          <h3>
            <span className="font-medium text-xs text-resumeBlue_1">Phone</span>{" "}
            <br />
            <span className="font-semibold text-xs text-resumeBlack_1 underline">
              {data.phone_number}
            </span>{" "}
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Resume1;
