"use client";

import React, { useState } from "react";
import { Container } from "../../container";
import { Heading } from "../../elements/heading";
import { Subheading } from "../../elements/subheading";
import { FeatureIconContainer } from "./feature-icon-container";
import { GradientContainer } from "../../gradient-container";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./card";
import { IconRocket } from "@tabler/icons-react";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/fourth";
import { IconContainer } from "./icon-container";
import { InstagramIcon, LinkedInIcon } from "@/components/icons/illustrations";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

const wordToNumber: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3
};

function convertWordToNumber(word: string) {
  return wordToNumber[word?.toLowerCase()] || null;
}

export const Features = ({ heading, sub_heading, globe_card, ray_card, graph_card, social_media_card, steps }: { heading: string, sub_heading: string, globe_card: any, ray_card: any, graph_card: any, social_media_card: any, steps?: any[] }) => {
  // Move hooks to top level
  const whoImages = [
    { src: "/team.jpg", alt: "MLDA Robotics Team" },
    { src: "/yokohama.jpg", alt: "ICRA BARN 2024 Yokohama" }
  ];
  const competitionsImages = [
    { src: "/yokohama.jpg", alt: "ICRA BARN 2024 Yokohama" },
    { src: "/yokohama2.jpg", alt: "ICRA BARN 2025 Finalist" }
  ];
  const [whoCurrent, setWhoCurrent] = useState(0);
  const [compCurrent, setCompCurrent] = useState(0);

  // Special horizontal layout for "Who are we?" section
  if (heading === "Who are we?") {
    const prev = () => setWhoCurrent((whoCurrent - 1 + whoImages.length) % whoImages.length);
    const next = () => setWhoCurrent((whoCurrent + 1) % whoImages.length);
    return (
      <GradientContainer className="md:my-20">
        <Container className="py-20 max-w-7xl mx-auto relative z-40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-left">
              <Heading className="pt-4 text-left">{heading}</Heading>
              <Subheading className="max-w-3xl text-left">{sub_heading}</Subheading>
            </div>
            <div className="flex-1 flex flex-col gap-6 items-center">
              <div className="relative w-full max-w-md">
                <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10">
                  <span className="sr-only">Previous</span>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                </button>
                <Image src={whoImages[whoCurrent].src} alt={whoImages[whoCurrent].alt} width={400} height={300} className="rounded-xl shadow-lg w-full object-cover" />
                <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10">
                  <span className="sr-only">Next</span>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="flex gap-2 mt-2">
                {whoImages.map((_, idx) => (
                  <button key={idx} onClick={() => setWhoCurrent(idx)} className={`w-3 h-3 rounded-full ${whoCurrent === idx ? 'bg-blue-500' : 'bg-gray-300'}`}></button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </GradientContainer>
    );
  }

  // Special horizontal layout for "Competitions" section
  if (heading === "Competitions") {
    const prev = () => setCompCurrent((compCurrent - 1 + competitionsImages.length) % competitionsImages.length);
    const next = () => setCompCurrent((compCurrent + 1) % competitionsImages.length);
    return (
      <GradientContainer className="md:my-20">
        <Container className="py-20 max-w-7xl mx-auto relative z-40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 flex flex-col gap-6 items-center">
              <div className="relative w-full max-w-md">
                <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10">
                  <span className="sr-only">Previous</span>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                </button>
                <Image src={competitionsImages[compCurrent].src} alt={competitionsImages[compCurrent].alt} width={400} height={300} className="rounded-xl shadow-lg w-full object-cover" />
                <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10">
                  <span className="sr-only">Next</span>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="flex gap-2 mt-2">
                {competitionsImages.map((_, idx) => (
                  <button key={idx} onClick={() => setCompCurrent(idx)} className={`w-3 h-3 rounded-full ${compCurrent === idx ? 'bg-blue-500' : 'bg-gray-300'}`}></button>
                ))}
              </div>
            </div>
            <div className="flex-1 text-left">
              <Heading className="pt-4 text-left">{heading}</Heading>
              <Subheading className="max-w-3xl text-left">{sub_heading}</Subheading>
              {steps && (
                <ul className="mt-6 space-y-4">
                  {steps.map((step: any, idx: number) => (
                    <li key={idx} className="bg-white/10 rounded-lg p-4">
                      <div className="font-bold text-white">{step.title}</div>
                      <div className="text-neutral-300">{step.description}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Container>
      </GradientContainer>
    );
  }

  return (
    <GradientContainer className="md:my-20">
      <Container className="py-20 max-w-7xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconRocket className="h-6 w-6 text-white" />
        </FeatureIconContainer>
        <Heading className="pt-4">{heading}</Heading>
        <Subheading className="max-w-3xl mx-auto">
          {sub_heading}
        </Subheading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
          {globe_card && (
            <Card className={`md:col-span-${convertWordToNumber(globe_card?.span) || '2'}`} >
              <CardTitle>{globe_card.title}</CardTitle>
              <CardDescription>
                {globe_card.description}
              </CardDescription>
              <CardSkeletonContainer>
                <SkeletonOne />
              </CardSkeletonContainer>
            </Card>
          )}

          {ray_card && (
            <Card className={`md:col-span-${convertWordToNumber(ray_card?.span) || '1'}`} >
              <CardSkeletonContainer className="max-w-[16rem] mx-auto">
                <SkeletonTwo />
              </CardSkeletonContainer>
              <CardTitle>{ray_card.title}</CardTitle>
              <CardDescription>
                {ray_card.description}
              </CardDescription>
            </Card>
          )}

          {graph_card && (
            <Card className={`md:col-span-${convertWordToNumber(graph_card?.span) || '2'}`} >
              <CardSkeletonContainer
                showGradient={false}
                className="max-w-[16rem] mx-auto"
              >
                <SkeletonThree />
              </CardSkeletonContainer>
              <CardTitle>{graph_card.title}</CardTitle>
              <CardDescription>
                {graph_card.description}
              </CardDescription>
            </Card>
          )}

          {social_media_card && (
            <Card className={`md:col-span-${convertWordToNumber(social_media_card?.span) || '1'}`} >
              <CardSkeletonContainer showGradient={false}>
                <SkeletonFour />
              </CardSkeletonContainer>
              <CardTitle>{social_media_card.title}</CardTitle>
              <CardDescription>
                {social_media_card.description}
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/mlda-ntu" target="_blank" rel="noopener noreferrer">
                    <IconContainer><IconBrandGithub className="w-6 h-6" /></IconContainer>
                  </a>
                  <a href="https://linkedin.com/company/mlda-ntu" target="_blank" rel="noopener noreferrer">
                    <IconContainer><LinkedInIcon /></IconContainer>
                  </a>
                  <a href="https://instagram.com/mlda_ntu" target="_blank" rel="noopener noreferrer">
                    <IconContainer><InstagramIcon /></IconContainer>
                  </a>
                </div>
              </CardDescription>
            </Card>
          )}
        </div>
      </Container>
    </GradientContainer >
  );
};
