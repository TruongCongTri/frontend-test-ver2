"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { likeGithubUser } from "@/libs/api/apiClient";

export default function LikeButton({ githubUserId, initiallyLiked }) {
  const [liked, setLiked] = useState(initiallyLiked);
  const [submitting, setSubmitting] = useState(false);

  const handleLike = async () => {
    if (liked || submitting) return;

    const phoneNumber = localStorage.getItem("phone_number");
    if (!phoneNumber) {
      toast.error("Phone number missing.");
      return;
    }

    try {
      setSubmitting(true);
      await likeGithubUser({
        phone_number: phoneNumber,
        github_user_id: githubUserId,
      });
      setLiked(true);
      toast.success("Liked!", { icon: "❤️" });
    } catch {
      toast.error("Failed to like user", { icon: "❌" });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div
      onClick={handleLike}
      className={`text-xl ${
        liked || submitting
          ? "cursor-not-allowed"
          : "cursor-pointer hover:scale-110 transition-transform"
      }`}
      title={liked ? "Liked" : "Like"}
    >
      {liked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          stroke="red"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 015.656 5.656L12 21 3.172 10.828a4 4 0 010-5.656z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 015.656 5.656L12 21 3.172 10.828a4 4 0 010-5.656z"
          />
        </svg>
      )}
    </div>
  );
}
