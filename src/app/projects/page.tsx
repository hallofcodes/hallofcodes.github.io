import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "The New HOC",
    description:
      "A modern, responsive, and user-friendly website for Hall of Codes, built with Next.js and Tailwind CSS. It serves as a platform to showcase our community, projects, and resources for developers.",
    author: "@mrepol742",
    github: "hallofcodes/hallofcodes.github.io",
    website: "https://hallofcodes.github.io",
  },
  {
    name: "Canis Chatbot",
    description:
      "A scalable, modular WhatsApp chatbot built in TypeScript. It leverages modern best practices, lean architecture, Prisma ORM, Dockerization, and environment-based configuration to deliver a robust, flexible successor to Orion.",
    author: "@mrepol742",
    github: "mrepol742/canis-chatbot",
    website: "https://www.melvinjonesrepol.com/projects/canis-chatbot",
  },
  {
    name: "phpspa",
    description:
      "A lightweight, component-based PHP library for building Single Page Applications (SPAs) without relying on heavy frontend frameworks.",
    author: "@dconco",
    github: "dconco/phpspa",
    website: "https://phpspa.readthedocs.io",
  },
  {
    name: "bemyvalentine",
    description: "",
    author: "@hadestia",
    github: "hallofcodes/bemyvalentine",
  },
  {
    name: "Hall of Codes",
    description:
      "A community-driven platform for developers to share knowledge, collaborate on projects, and enhance their coding skills.",
    author: "@mrepol742",
    github: "hallofcodes/hallofcodes-vue",
    website: "https://hallofcodes.github.io",
  },
  {
    name: "Orion Chatbot",
    description:
      "Meet the lightning-fast Facebook Messenger chatbot, seamlessly managing multiple accounts with access to 271 commands.",
    author: "@mrepol742",
    github: "mrepol742/project-orion",
    website: "https://www.melvinjonesrepol.com/projects/orion-chatbot",
  },
  {
    name: "2022-Countdown",
    description: "2022 New Year End Countdown by Salaudeen Jami",
    author: "@salaudeenjami",
    github: "hallofcodes/2022-countdown",
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
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
            >
              <Image
                src={`https://avatars.githubusercontent.com/${project.name}?s=192`}
                className="rounded-full mb-4"
                alt="Project Photo"
                width={192}
                height={192}
              />
              <span className="mt-10 bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                {project.author}
              </span>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                {project.name}
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                {project.description}
              </p>
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
              </Link>{" "}
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
          &copy; All Titles and Logos are Copyrighted by their respective owners.
        </span>
      </div>
    </main>
  );
}
