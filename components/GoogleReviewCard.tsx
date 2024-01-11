import Link from "next/link";
import React from "react";

// types/Review.ts
export type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  href: string;
};

interface GoogleReviewCardProps {
  review: Review;
}

const GoogleReviewCard = ({ review }: GoogleReviewCardProps) => {
  return (
    <Link
      className="p-6 rounded-md shadow-md flex flex-col text-darkBlue hover:opacity-80 overflow-hidden z-[5] bg-[#fdfdfd]
      w-full min-h-[192px]"
      target="_blank"
      href={review.href}
    >
      <div className="flex items-center mb-2">
        <div className="rounded-full mr-2 w-14 h-14">
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            width={56}
            height={56}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-lg font-semibold ml-1">{review.author_name}</h3>
          <div className="flex gap-x-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-left text-sm truncate-lines">{review.text}</p>
    </Link>
  );
};

export default GoogleReviewCard;
