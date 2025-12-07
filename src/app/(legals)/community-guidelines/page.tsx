export default function CommunitGuidlines() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <h1 className="flex items-center text-5xl font-extrabold dark:text-white">
          Welcome to
          <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
            Our Community
          </span>
        </h1>
        <p className="mt-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          We’re glad you’re here. To ensure Hall of Codes remains a welcoming
          and safe place for everyone, please follow these guidelines:
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Be Respectful:</h3>
            <p className="text-gray-500">
              Treat all members with respect. Harassment, hate speech, or
              personal attacks are not allowed.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Stay On Topic:</h3>
            <p className="text-gray-500">
              Keep discussions relevant to coding, projects, or the community.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">No Spam:</h3>
            <p className="text-gray-500">
              Avoid self-promotion, repeated messages, or unrelated links.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contribute Positively:</h3>
            <p className="text-gray-500">
              Share helpful feedback, resources, and support fellow members.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Respect Privacy:</h3>
            <p className="text-gray-500">
              Do not share personal information of others without permission.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Wit Happens:</h3>
            <p className="text-gray-500">
              Sometimes messages may be witty, sarcastic, or playful. Don’t take
              things personally.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">No Liability:</h3>
            <p className="text-gray-500">
              Advice, consultations, or answers shared in this community are for
              informational purposes only. Hall of Codes members and admins are
              not responsible for any outcomes resulting from the use of shared
              information.
            </p>
          </div>
        </div>

        <p className="mt-6">
          By participating in Hall of Codes, you agree to follow these rules.
          Violations may result in removal from the community.
        </p>
      </div>
    </main>
  );
}
