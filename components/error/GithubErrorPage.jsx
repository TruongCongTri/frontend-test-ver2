"use client";

export default function GithubErrorPage() {
  return (
    <div className="text-center py-20 text-red-400">
      <h1 className="text-2xl font-bold">🚫 GitHub API Limit Reached</h1>
      <p className="mt-4 text-white">
        GitHub is temporarily blocking requests (rate limit or token issue).
      </p>
      <p className="mt-2 text-sm text-gray-400">
        Please try again in a few minutes.
      </p>
    </div>
  );
}
