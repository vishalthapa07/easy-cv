import { useRef } from "react";
import { TInputs } from "../forms/questions-form ";
import { useReactToPrint } from "react-to-print";
import { FaDownload } from "react-icons/fa6";
import { printPageStyle } from "../constants/document-print";
import { Session } from "next-auth";

const Resume1 = ({
  data,
  session,
}: {
  data: TInputs;
  session: Session | null;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    pageStyle: printPageStyle,
  });

  if (!data.name) {
    return (
      <div className="font-medium text-neutral-700 dark:text-neutral-300 text-sm lg:text-base max-w-sm animate-pulse">
        Please provide your information first
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute top-3 right-3 hover:opacity-70">
        <FaDownload
          type="button"
          className="text-resumeBlack_1 text-lg animate-bounce cursor-pointer"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onClick={reactToPrintFn}
        />
      </div>
      <div className="w-full bg-white rounded-lg shadow-md">
        <div ref={contentRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-12 pt-12 rounded-t-lg">
            <div>
              <img
                src={session?.user?.image || ""}
                alt={session?.user?.name || "icon"}
                className="rounded-full mb-2 h-20"
              />
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
                <span className="font-medium text-xs text-resumeBlue_1">
                  Email
                </span>{" "}
                <br />
                <span className="font-semibold text-xs text-resumeBlack_1 underline">
                  {data.email}
                </span>{" "}
                <br />
              </h3>
              <h3 className="mt-2">
                <span className="font-medium text-xs text-resumeBlue_1">
                  LinkedIn
                </span>{" "}
                <br />
                <span className="font-semibold text-xs text-resumeBlack_1 underline">
                  {data.linkedin}
                </span>{" "}
                <br />
              </h3>
              <h3 className="mt-2">
                <span className="font-medium text-xs text-resumeBlue_1">
                  Phone
                </span>{" "}
                <br />
                <span className="font-semibold text-xs text-resumeBlack_1 underline">
                  {data.phone_number}
                </span>{" "}
                <br />
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-12 pb-12 pt-8">
            <div>
              <h2 className="font-medium text-sm text-resumeBlue_1 mb-4">
                Work Experience
              </h2>
              {data.experiences.map((item, index) => {
                return (
                  <div key={index} className="pb-4">
                    <div>
                      <h3 className="font-bold text-sm text-resumeBlack_1">
                        {item.position}
                      </h3>
                      <div className="text-xs text-resumeGray_1">
                        {item.companyName}, {item.joinedDate} - {item.leftDate}
                      </div>
                      <p className="font-normal text-xs text-resumeBlack_1 mt-2">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div>
                <h2 className="font-medium text-sm text-resumeBlue_1 pt-4">
                  Tools and Technology
                </h2>
                {data.tools.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="font-bold text-sm text-resumeBlack_1 pb-4"
                    >
                      {`${item.toolName}, `}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <div>
                <h2 className="font-medium text-sm text-resumeBlue_1 mb-4">
                  Education & Learning
                </h2>
                {data.education.map((item, index) => {
                  return (
                    <div key={index} className="pb-4">
                      <div>
                        <h3 className="font-bold text-sm text-resumeBlack_1">
                          {item.course}
                        </h3>
                        <div className="text-xs text-resumeGray_1">
                          {item.institute}, {item.startDate} - {item.endDate}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <h2 className="font-medium text-sm text-resumeBlue_1 pt-4">
                  Skills
                </h2>
                {data.skills.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="font-bold text-sm text-resumeBlack_1 pb-4"
                    >
                      {`${item.skillName}, `}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume1;
