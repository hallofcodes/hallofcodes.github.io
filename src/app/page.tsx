import Image from "next/image";

const timeline = [
  {
    date: "Sometime in 2019",
    heading: "This group has been established",
    description:
      "It's former name was Android Developer then after 2 more years it was changed to Google Developers",
  },
  {
    date: "Sometime in 2021",
    heading: "The community has been rebranded to Hall of Codes",
    description: "Till this day the group is still thriving and active",
  },
  {
    date: "November 2021",
    heading: "Hall of Codes first Github Org",
    description: "",
  },
  {
    date: "December 2021",
    heading: "Hall of Codes first Facebook Page",
    description: "As of now it has 4.5K likes and followers",
  },
  {
    date: "July 2025",
    heading: "Hall of Codes is now at WhatsApp",
    description:
      "We are now at WhatsApp, you can join us at https://chat.whatsapp.com/J6JINAjxNmF9Dn1ETCteGA",
  },
  {
    date: "August 2025",
    heading: "Migrate Hall of Codes site to Next.js",
    description:
      "We are now using Next.js for our site, which is more performant and SEO friendly",
  },
];

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <a
          href="https://github.com/hallofcodes"
          className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
            Hello
          </span>
          <span className="text-sm font-medium">Follow us on GitHub</span>
          <svg
            className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Mergin Programmers
          </span>
          &nbsp; Beyond Conflicts.
        </h1>
        <p className="my-4 text-lg text-gray-500">
          We revolutionizes development by fostering cohesion among teams,
          transcending conflicts to drive collective innovation. Harnessing the
          synergy of diverse talents, we pave the way for seamless
          collaboration, ensuring projects thrive in an environment of unity and
          progress.
        </p>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          Join us in revolutionizing the landscape of programming, where
          conflicts dissolve, and collaboration flourishes. Experience the
          synergy of innovation and unity with Hall of Codes.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
        >
          Learn more
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
        </a>
      </div>

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="mx-auto max-w-screen-xl my-auto text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Why Hall of Codes?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Be part of a vibrant community where innovation thrives and
            collaboration is key. With access to cutting-edge projects and a
            supportive network, you&apos;ll accelerate your growth and make a
            real impact in the world of technology.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
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
            </a>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Timeline
          </h2>

          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {timeline.map((item, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1.707 11.293a1 1 0 01-1.414 0L9 12.414l-.293.293a1 1 0 01-1.414-1.414l2-2a1 1 0 011.414 0l2 2a1 1 0 010 1.414zM10 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.heading}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.date}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
