"use client";

import StarBackground from "@/components/decorations/star-background";
import ShootingStars from "@/components/decorations/shooting-star";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMapPin,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";

import { Button } from "../elements/button";

// Dynamically import the entire map component to avoid SSR issues
const LeafletMap = dynamic(() => import('./leaflet-map-component'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-800 flex items-center justify-center">
      <div className="text-neutral-400">Loading map...</div>
    </div>
  )
}) as React.ComponentType<{ latitude: number; longitude: number; title: string; }>;

// Map component wrapper
const MapComponent = ({ latitude, longitude }: { latitude?: number, longitude?: number }) => {
  return (
    <LeafletMap 
      latitude={latitude || 1.3460}
      longitude={longitude || 103.6802}
      title="MLDA Robotics Lab"
    />
  );
};

export function FormNextToSection({ heading, sub_heading, form, section, content, social_media_icon_links }: { heading: string, sub_heading: string, form: any, section: any, content?: any, social_media_icon_links?: any }) {

  // Default users data in case section.users is undefined
  const defaultUsers = [
    {
      id: 1,
      firstname: "Sarah",
      lastname: "Chen",
      job: "Lead Developer",
      image: {
        url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        alternativeText: "Sarah Chen",
      },
    },
    {
      id: 2,
      firstname: "Michael",
      lastname: "Rodriguez",
      job: "Product Manager",
      image: {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        alternativeText: "Michael Rodriguez",
      },
    },
    {
      id: 3,
      firstname: "Emily",
      lastname: "Johnson",
      job: "UI/UX Designer",
      image: {
        url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        alternativeText: "Emily Johnson",
      },
    },
  ];

  const socialMediaLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/launchpad",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/launchpad",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/launchpad",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  // Check if we have address/location content to show
  const hasLocationContent = content && (content.address || content.map);

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-40 sm:px-6 lg:flex-none lg:px-20  xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-white">
              {heading}
            </h1>
            <p className="mt-4 text-muted   text-sm max-w-sm">
              {sub_heading}
            </p>
          </div>

          <div className="py-10">
            <div>
              <form
                className="space-y-4"
              >
                {form && form?.fields?.map((input: any, index: number) => (
                  <div key={index}>
                    {input.type !== 'submit' && (
                      <label
                        htmlFor={input.name}
                        className="block text-sm font-medium leading-6 text-neutral-400"
                      >
                        {input.name.charAt(0).toUpperCase() + input.name.slice(1)}
                      </label>
                    )}

                    <div className="mt-2">
                      {input.type === 'textarea' ? (
                        <textarea
                          rows={5}
                          id={input.name}
                          name={input.name}
                          placeholder={input.placeholder}
                          required={input.required}
                          className="block w-full bg-neutral-900  px-4 rounded-md border-0 py-1.5  shadow-aceternity text-neutral-100 placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6"
                        />
                      ) : input.type === 'submit' ? (
                        <div>
                          <Button type="submit" className="w-full mt-6">{form.submitText || input.name}</Button>
                        </div>
                      ) : (
                        <input
                          id={input.name}
                          name={input.name}
                          type={input.type}
                          placeholder={input.placeholder}
                          required={input.required}
                          className="block w-full bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-neutral-100 placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6"
                        />
                      )}
                    </div>
                  </div>
                ))}
                {form && !form.fields?.some((field: any) => field.type === 'submit') && (
                  <Button type="submit" className="w-full mt-6">{form.submitText || "Send Message"}</Button>
                )}
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 py-4">
            {socialMediaLinks.map((social) => (
                <Link href={social.href} target="_blank" key={social.name}>
                  {social.icon}
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      <div className="relative w-full z-20 hidden md:flex border-l border-charcoal overflow-hidden bg-neutral-900">
        <StarBackground />
        <ShootingStars />
        
        {hasLocationContent ? (
          // Show location content with map and address
          <div className="flex flex-col justify-center items-center w-full px-8 py-16">
            <div className="max-w-md w-full space-y-8">
              {content.heading && (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">{content.heading}</h2>
                  {content.description && (
                    <p className="text-neutral-400 text-sm">{content.description}</p>
                  )}
                </div>
              )}
              
              {content.map && (
                <MapComponent 
                  latitude={content.map.latitude}
                  longitude={content.map.longitude}
                />
              )}
              
              {/* Hardcoded address instead of dynamic content.address */}
              <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700">
                <div className="flex items-start gap-3">
                  <IconMapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-white">MLDA Robotics Lab</h3>
                    <div className="text-sm text-neutral-300 space-y-1">
                      <p>50 Nanyang Ave</p>
                      <p>Nanyang Technological University</p>
                      <p>School of Electrical and Electronic Engineering</p>
                      <p>S2.1-B4-01</p>
                      <p>639798, Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Show default team content
          <div className="flex items-center justify-center w-full">
            <div className="max-w-sm mx-auto">
              <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={section?.users || defaultUsers} />
              </div>
              <p className="font-semibold text-xl text-center text-muted text-balance">
                {section?.heading || "Join Our Team"}
              </p>
              <p className="font-normal text-base text-center text-neutral-500 mt-8 text-balance">
                {section?.sub_heading || "Work with talented professionals who are passionate about building amazing products."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
