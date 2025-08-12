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
      name: "GitHub",
      href: "https://github.com/mlda-ntu",
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
      href: "https://linkedin.com/team/mlda-ntu",
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
    {
      name: "Instagram",
      href: "https://instagram.com/mlda_ntu",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)" />
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)" />
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)" />
          <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white" />
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
            <p className="mt-4 text-muted text-sm">
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
