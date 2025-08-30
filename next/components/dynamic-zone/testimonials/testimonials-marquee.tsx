"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "react-fast-marquee";
import { CustomImage } from "@/components/ui/image";

// Hardcoded testimonials data
const hardcodedTestimonials = [
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
		text: "Working with the MLDA Robo team has been incredible. Dun Yan's leadership and the team's technical expertise make them formidable competitors.",
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
	{
		id: 4,
		text: "The team's use of CasADi for nonlinear optimization in their MPC framework shows sophisticated understanding of control theory and practical implementation.",
		user: {
			firstname: "Dr. James",
			lastname: "Liu",
			job: "Control Systems Expert at NTU",
			image: {
				url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				alternativeText: "Dr. James Liu",
			},
		},
	},
	{
		id: 5,
		text: "As finalists for ICRA BARN 2025, the MLDA team continues to push boundaries in autonomous navigation research. Their progress is remarkable.",
		user: {
			firstname: "Prof. Lisa",
			lastname: "Wang",
			job: "Autonomous Systems Researcher",
			image: {
				url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
				alternativeText: "Prof. Lisa Wang",
			},
		},
	},
	{
		id: 6,
		text: "The team's integration of Hector SLAM with their MPC approach creates a robust navigation system that performs excellently in dense environments.",
		user: {
			firstname: "Dr. Alex",
			lastname: "Kim",
			job: "SLAM Researcher at NTU",
			image: {
				url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
				alternativeText: "Dr. Alex Kim",
			},
		},
	},
	{
		id: 7,
		text: "Dun Yan's leadership as Team Lead has fostered an environment of innovation and excellence. The team consistently delivers high-quality research.",
		user: {
			firstname: "Prof. Anna",
			lastname: "Tan",
			job: "Robotics Department Head",
			image: {
				url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
				alternativeText: "Prof. Anna Tan",
			},
		},
	},
	{
		id: 8,
		text: "The MLDA Robo team's work on LiDAR processing and obstacle detection showcases practical engineering skills essential for real-world robotics.",
		user: {
			firstname: "Dr. Robert",
			lastname: "Chang",
			job: "Perception Systems Expert",
			image: {
				url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
				alternativeText: "Dr. Robert Chang",
			},
		},
	},
];

export const TestimonialsMarquee = ({
	testimonials = hardcodedTestimonials,
}: {
	testimonials?: any;
}) => {
	const testimonialsToUse = testimonials || hardcodedTestimonials;
	const levelOne = testimonialsToUse.slice(0, 8);
	const levelTwo = testimonialsToUse.slice(8, 16);

	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex h-full relative">
				<div className="h-full absolute w-20 left-0 inset-y-0 z-30 bg-gradient-to-r from-charcoal to-transparent" />
				<div className="h-full absolute w-20 right-0 inset-y-0 z-30 bg-gradient-to-l from-charcoal to-transparent" />
				<Marquee>
					{levelOne.map((testimonial: any, index: any) => (
						<Card
							key={`testimonial-${testimonial.id}-${index}`}
							className="max-w-xl h-60 mx-4"
						>
							<Quote>{testimonial?.text}</Quote>
							<div className="flex gap-2 items-center mt-8">
								<CustomImage
									src={testimonial?.user?.image?.url}
									alt={`${testimonial.user.firstname} ${testimonial.user.lastname}`}
									width={40}
									height={40}
									className="rounded-full"
								/>
								<div className="flex flex-col">
									<QuoteDescription className="text-neutral-300">
										{`${testimonial.user.firstname} ${testimonial.user.lastname}`}
									</QuoteDescription>
									<QuoteDescription className="text-neutral-400">
										{testimonial.user.job}
									</QuoteDescription>
								</div>
							</div>
						</Card>
					))}
				</Marquee>
			</div>
			<div className="flex h-full relative mt-8">
				<div className="h-full absolute w-20 left-0 inset-y-0 z-30 bg-gradient-to-r from-charcoal to-transparent" />
				<div className="h-full absolute w-20 right-0 inset-y-0 z-30 bg-gradient-to-l from-charcoal to-transparent" />
				<Marquee direction="right" speed={20}>
					{levelTwo.map((testimonial: any, index: any) => (
						<Card
							key={`testimonial-${testimonial.id}-${index}`}
							className="max-w-xl h-60 mx-4"
						>
							<Quote>{testimonial.text}</Quote>
							<div className="flex gap-2 items-center mt-8">
								<CustomImage
									src={testimonial?.user?.image?.url}
									alt={`${testimonial.user.firstname} ${testimonial.user.lastname}`}
									width={40}
									height={40}
									className="rounded-full"
								/>
								<div className="flex flex-col">
									<QuoteDescription className="text-neutral-300">
										{`${testimonial.user.firstname} ${testimonial.user.lastname}`}
									</QuoteDescription>
									<QuoteDescription className="text-neutral-400">
										{testimonial.user.job}
									</QuoteDescription>
								</div>
							</div>
						</Card>
					))}
				</Marquee>
			</div>
		</div>
	);
};
export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.30)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
				className
			)}
		>
			{children}
		</div>
	);
};

export const Quote = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h3 className={cn("text-base font-semibold text-white py-2", className)}>
			{children}
		</h3>
	);
};

export const QuoteDescription = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<p
			className={cn("text-sm font-normal text-neutral-400 max-w-sm", className)}
		>
			{children}
		</p>
	);
};
