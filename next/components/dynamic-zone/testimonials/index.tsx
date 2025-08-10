"use client";
import React from "react";
import { TestimonialsSlider } from "./slider";
import { FeatureIconContainer } from "../features/feature-icon-container";
import { Heading } from "../../elements/heading";
import { Subheading } from "../../elements/subheading";
import { TbLocationBolt } from "react-icons/tb";
import { TestimonialsMarquee } from "./testimonials-marquee";
import { AmbientColor } from "../../decorations/ambient-color";

// Default testimonials data
const defaultTestimonials = [
	{
		id: 1,
		text: "The MLDA EEE team's MPC approach with mode switching logic was innovative and effective. Their 2nd place finish at ICRA BARN 2024 demonstrates exceptional engineering skills.",
		user: {
			firstname: "Dr. Sarah",
			lastname: "Chen",
			job: "Robotics Professor at NTU",
			image: {
				url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
				alternativeText: "Dr. Sarah Chen",
			},
		},
	},
	{
		id: 2,
		text: "Their classical MPC implementation with intelligent obstacle handling shows deep understanding of autonomous navigation. The reversing mode logic was particularly clever.",
		user: {
			firstname: "Prof. Michael",
			lastname: "Zhang",
			job: "ICRA BARN Competition Judge",
			image: {
				url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				alternativeText: "Prof. Michael Zhang",
			},
		},
	},
	{
		id: 3,
		text: "Working with the MLDA Robotics team has been incredible. Dun Yan's leadership and the team's technical expertise make them formidable competitors.",
		user: {
			firstname: "Dr. Emily",
			lastname: "Rodriguez",
			job: "Robotics Research Collaborator",
			image: {
				url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
				alternativeText: "Dr. Emily Rodriguez",
			},
		},
	},
];

export const Testimonials = ({
	heading = "What our customers say",
	sub_heading = "Don't just take our word for it. Hear from the companies that trust LaunchPad to deliver their content at warp speed.",
	testimonials = defaultTestimonials,
}: {
	heading?: string;
	sub_heading?: string;
	testimonials?: any;
}) => {
	const testimonialsToUse = testimonials || defaultTestimonials;

	return (
		<div className="relative">
			<AmbientColor />
			<div className="pb-20">
				<FeatureIconContainer className="flex justify-center items-center overflow-hidden">
					<TbLocationBolt className="h-6 w-6 text-white" />
				</FeatureIconContainer>
				<Heading className="pt-4">{heading}</Heading>
				<Subheading>{sub_heading}</Subheading>
			</div>

			{testimonialsToUse && (
				<div className="relative md:py-20 pb-20">
					<TestimonialsSlider testimonials={testimonialsToUse} />
					<div className="h-full w-full mt-20 bg-charcoal ">
						<TestimonialsMarquee testimonials={testimonialsToUse} />
					</div>
				</div>
			)}

			<div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-charcoal to-transparent"></div>
		</div>
	);
};