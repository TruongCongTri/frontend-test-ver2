"use client";

export default function SearchError({ error, reset }) {
  return (
    <div className="p-8 text-white">
      <div className="text-center py-20 text-red-400">
        <h1 className="text-2xl font-bold">🚫 GitHub API Limit Reached</h1>
        <p className="mt-4 text-white">
          GitHub is temporarily blocking requests (rate limit or token issue).
        </p>
        <p className="mt-4 text-white">
          {error}
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Please try again in a few minutes.
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
      >
        Retry
      </button>
    </div>
  );
}
