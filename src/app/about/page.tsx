import Image from "next/image";
import Link from "next/link";

const organizationChart = [
  {
    position: "Founder",
    name: "Melvin Jones Repol",
    username: "mrepol742",
    bio: "Software Engineer",
    website: "https://www.melvinjonesrepol.com",
  },
  {
    position: "Co-Founder",
    name: "Samiun Nafis",
    username: "samiunnafis",
    bio: "UI/UX Designer",
    website: "https://samiunnafiss.github.io",
  },
];

export default function About() {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        About{" "}
        <span className="text-blue-600 dark:text-blue-500">Hall of Codes</span>.
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-9">
        Here at Hall of Codes we share our passion for coding and fostering
        collaboration among developers worldwide. Discover our journey, mission,
        and commitment to advancing coding knowledge and skills in an inclusive
        and supportive environment.
      </p>

      <div className="text-center">
        <h2 className="text-4xl text-purple-500">Our Mission</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 w-full max-w-2xl mx-auto mb-6">
          To create a global community of developers who share knowledge,
          collaborate on projects, and inspire each other to grow in their
          coding journey.
        </p>

        <h2 className="text-4xl text-green-500">Our Vision</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 w-full max-w-2xl mx-auto">
          To be a leading platform that empowers developers to connect,
          innovate, and excel in their coding endeavors, fostering a culture of
          continuous learning and collaboration.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {organizationChart.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
          >
            <Image
              src={`http://avatars.githubusercontent.com/${member.username}?s=192`}
              className="rounded-full border-2 border-gray-200 dark:border-gray-700"
              alt="Profile Photo"
              width={192}
              height={192}
            />
            <span className="mt-10 bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
              {member.position}
            </span>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              {member.name}
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              {member.bio}
            </p>
            <Link
              href={member.website}
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
          </div>
        ))}
      </div>
    </div>
  );
}
