import { FaGithub } from "react-icons/fa";
import { doSociaLogin } from "../actions";

const LoginForm = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid lg:h-screen lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-6 lg:py-0 sm:px-0">
            <form
              action={doSociaLogin}
              className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
            >
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Welcome
              </h1>

              <div className="items-center space-x-0 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                <button
                  type="submit"
                  name="action"
                  value="google"
                  className="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_13183_10121)">
                      <path
                        d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                        fill="#3F83F8"
                      />
                      <path
                        d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13183_10121">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Sign in with Google
                </button>
                <button
                  disabled={true}
                  type="submit"
                  name="action"
                  value="github"
                  className="opacity-50 w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <FaGithub className="text-2xl mr-2" />
                  Sign in with Github
                </button>
              </div>

              <div className="flex items-center">
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                  or
                </div>
                <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Start your journey
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center px-4 py-6 bg-primary-600 lg:py-0 sm:px-0">
            <div className="max-w-md xl:max-w-xl">
              <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white xl:text-5xl">
                Easy CV assists you in landing roles at leading companies
              </h1>
              <p className="mb-4 font-light text-primary-200 lg:mb-8">
                Land your dream job with the perfect CV. With Easy CV’s free
                online CV maker, you can effortlessly create a CV as impressive
                as your skills, credentials, and relevant work experiences.
              </p>
              <div className="flex items-center divide-x divide-primary-500">
                <div className="flex pr-3 -space-x-4 sm:pr-5">
                  <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="bonnie avatar"
                  />
                  <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="jese avatar"
                  />
                  <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="roberta avatar"
                  />
                  <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                    alt="thomas avatar"
                  />
                </div>
                <a href="#" className="pl-3 text-white sm:pl-5 dark:text-white">
                  <span className="text-sm text-primary-200">
                    Over <span className="font-medium text-white">15.7k</span>{" "}
                    Happy Customers
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
