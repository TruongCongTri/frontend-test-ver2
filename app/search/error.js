"use client";

export default function SearchError({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <>
        <h1 className="text-2xl font-bold text-red-500">
          🚫 GitHub API Rate Limit Reached
        </h1>
        <p className="mt-4 text-gray-300">
          GitHub is temporarily rejecting requests. Please wait a few minutes
          and try again.
        </p>
      </>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
      >
        Retry
      </button>
    </div>
  );
}
