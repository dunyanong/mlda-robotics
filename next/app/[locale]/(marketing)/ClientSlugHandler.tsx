"use client";

import { useEffect } from "react";
import { useSlugContext } from "@/app/context/SlugContext";
import { useRouter } from "next/navigation";

export default function ClientSlugHandler({
  localizedSlugs,
}: {
  localizedSlugs: Record<string, string>;
}) {
  const { dispatch } = useSlugContext();
  const router = useRouter();

  useEffect(() => {
    dispatch({ type: "SET_SLUGS", payload: localizedSlugs });

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      if (
        event.data &&
        typeof event.data === "object" &&
        event.data.type === "pageUpdate"
      ) {
        router.refresh();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [localizedSlugs, dispatch, router]); // Use dispatch instead of setLocalizedSlugs

  return null; // This component only handles the state and doesn't render anything.
}
