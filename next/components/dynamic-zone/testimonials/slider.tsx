"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Sparkles } from "../../ui/sparkles";
import { CustomImage } from "@/components/ui/image";

export const TestimonialsSlider = ({ testimonials }: { testimonials: any }) => {
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  // Default testimonials if none provided
  const defaultTestimonials = [
    {
      id: 1,
      text: "LaunchPad has completely transformed how we deliver content. The speed and reliability are unmatched.",
      user: {
        firstname: "Sarah",
        lastname: "Johnson",
        job: "CTO at TechCorp",
        image: {
          url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
          alternativeText: "Sarah Johnson",
        },
      },
    },
    {
      id: 2,
      text: "The performance improvements we've seen since switching to LaunchPad are incredible. Our users love it!",
      user: {
        firstname: "Michael",
        lastname: "Chen",
        job: "Product Manager at StartupCo",
        image: {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          alternativeText: "Michael Chen",
        },
      },
    },
    {
      id: 3,
      text: "LaunchPad made our deployment process seamless. We can now focus on building great features.",
      user: {
        firstname: "Emily",
        lastname: "Rodriguez",
        job: "Lead Developer at DevStudio",
        image: {
          url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
          alternativeText: "Emily Rodriguez",
        },
      },
    },
  ];

  const slicedTestimonials = (testimonials || defaultTestimonials).slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === slicedTestimonials.length ? 0 : active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (autorotate) return;
    setTimeout(() => {
      setAutorotate(true);
    }, autorotateTiming);
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* Testimonial image */}
      <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-neutral-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-neutral-900 after:m-px before:-z-20 after:-z-20">
          <Sparkles
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Carousel */}
        <div className="text-center">
          <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-neutral-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-neutral-900 after:m-px before:-z-20 after:-z-20">
              {slicedTestimonials.map((item: any, index: number) => (
                <Transition
                  key={index}
                  show={active === index}
                  enter="transition ease-&lsqb;cubic-bezier(0.68,-0.3,0.32,1)&rsqb; duration-700 order-first"
                  enterFrom="opacity-0 -translate-x-20"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-&lsqb;cubic-bezier(0.68,-0.3,0.32,1)&rsqb; duration-700"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-20"
                  beforeEnter={() => heightFix()}
                >
                  <div className="absolute inset-0 h-full -z-10">
                    <CustomImage
                      className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                      src={item.user.image.url}
                      width={56}
                      height={56}
                      alt={`${item.user.firstname} ${item.user.lastname}`}
                    />
                  </div>
                </Transition>
              ))}
            </div>
          </div>
          {/* Text */}
          <div className="mb-9">
            <div className="relative flex flex-col">
              {slicedTestimonials.map((item: any, index: number) => (
                <Transition
                  key={index}
                  show={active === index}
                  enter="transition ease-&lsqb;cubic-bezier(0.68,-0.3,0.32,1)&rsqb; duration-700 order-first"
                  enterFrom="opacity-0 -translate-x-20"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-&lsqb;cubic-bezier(0.68,-0.3,0.32,1)&rsqb; duration-700"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-20"
                  beforeEnter={() => heightFix()}
                >
                  <div className="text-2xl font-bold text-neutral-50 before:content-['\201C'] after:content-['\201D']">
                    {item.text}
                  </div>
                </Transition>
              ))}
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap justify-center -m-1">
            {slicedTestimonials.map((item: any, index: number) => (
              <button
                key={index}
                className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-neutral-600 transition-colors duration-150 ${
                  active === index
                    ? "bg-indigo-500 text-white shadow-indigo-950/10"
                    : "bg-white hover:bg-indigo-100 text-neutral-900"
                }`}
                onClick={() => {
                  setActive(index);
                  setAutorotate(false);
                }}
              >
                <span>
                  {item.user.firstname} {item.user.lastname}
                </span>
                <span className="text-neutral-300 ml-1">{item.user.job}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
