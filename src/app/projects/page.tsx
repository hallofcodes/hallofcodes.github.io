import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Sprint Sight",
    description:
      "A dashboard that visualizes module status and GitHub commit activity.",
    github: "sprintsight",
  },
  {
    name: "The New HOC",
    description:
      "A modern, responsive, and user-friendly website for Hall of Codes, built with Next.js and Tailwind CSS. It serves as a platform to showcase our community, projects, and resources for developers.",
    github: "hallofcodes.github.io",
    website: "https://hallofcodes.github.io",
  },
  {
    name: "bemyvalentine",
    description: "",
    github: "bemyvalentine",
  },
  {
    name: "Hall of Codes",
    description:
      "A community-driven platform for developers to share knowledge, collaborate on projects, and enhance their coding skills.",
    github: "hallofcodes-vue",
    website: "https://hallofcodes.github.io",
  },
  {
    name: "2022-Countdown",
    description: "2022 New Year End Countdown by Salaudeen Jami",
    github: "2022-countdown",
  },
];

export default function Projects() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <h1 className="flex items-center text-5xl font-extrabold dark:text-white">
          Open-Source
          <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            Projects
          </span>
        </h1>
        <p className="mt-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          We love open-source here at Hall of Codes and here are the few
          examples of the open-source projects developed by our members.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8"
            >
              <Image
                src={`https://avatars.githubusercontent.com/${project.name}?s=192`}
                className="rounded-full mb-4"
                alt="Project Photo"
                width={192}
                height={192}
              />
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                {project.name}
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              {project.github && (
                <Link
                  href={`https://github.com/${project.github}`}
                  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Source
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              )}{" "}
              &nbsp;
              {project.website && (
                <Link
                  href={project.website}
                  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Website
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>

        <span className="mt-10 block text-center text-gray-500 dark:text-gray-400">
          &copy; All Titles and Logos are Copyrighted by their respective
          owners.
        </span>
      </div>
    </main>
  );
}
