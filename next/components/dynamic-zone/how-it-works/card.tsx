"use client";

import React from "react";

export const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 rounded-md border border-neutral-800 bg-neutral-950">
      <p className="text-lg font-bold text-white mb-2">{title}</p>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
};
