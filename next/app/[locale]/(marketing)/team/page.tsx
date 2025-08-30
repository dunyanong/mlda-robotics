import React from "react";
import { Container } from "@/components/container";
import { Heading } from "@/components/elements/heading";
import { Subheading } from "@/components/elements/subheading";
import Link from "next/link";

const teams = [
	{
		year: "AY 2026",
		members: [
			{
				name: "Dun Yan",
				role: "Team Lead",
				image: "/members/2026/DunYan.jpeg",
				link: "https://www.linkedin.com/in/dunyan/",
			},
			{
				name: "Chan Jin You",
				role: "Deputy Team Lead",
				image: "/members/2026/chanjinyou.jpeg",
				link: "https://www.linkedin.com/in/jychan0527/",
			},
			{
				name: "Jason",
				role: "Senior Engineer",
				image: "/members/unknown.jpg",
				link: "/en",
			},
		],
	},
	// {
	// 	year: "AY 2025",
	// 	members: [
	// 		{
	// 			name: "Dun Yan Ong",
	// 			role: "Team Lead",
	// 			image: "/team.jpg",
	// 			link: "https://github.com/ongdunyan",
	// 		},
	// 		{
	// 			name: "Sarah Chen",
	// 			role: "Control Systems",
	// 			image: "/ntueee.jpg",
	// 			link: "https://linkedin.com/in/sarahchen2025",
	// 		},
	// 		{
	// 			name: "Michael Zhang",
	// 			role: "SLAM Specialist",
	// 			image: "/yokohama.jpg",
	// 			link: "https://github.com/michaelzhang2025",
	// 		},
	// 	],
	// },
	// {
	// 	year: "AY 2024",
	// 	members: [
	// 		{
	// 			name: "Emily Rodriguez",
	// 			role: "Software Engineer",
	// 			image: "/team.jpg",
	// 			link: "https://linkedin.com/in/emilyrodriguez2024",
	// 		},
	// 		{
	// 			name: "James Liu",
	// 			role: "Hardware Engineer",
	// 			image: "/ntueee.jpg",
	// 			link: "https://github.com/jamesliu2024",
	// 		},
	// 		{
	// 			name: "Anna Tan",
	// 			role: "Project Manager",
	// 			image: "/mlda.jpg",
	// 			link: "https://linkedin.com/in/annatan2024",
	// 		},
	// 	],
	// },
];

function TeamMemberCard({ member }: { member: any }) {
	return (
		<div className="bg-neutral-900 rounded-xl p-6 flex flex-col items-center shadow-lg border border-neutral-800">
			<img
				src={member.image}
				alt={member.name}
				className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-indigo-500"
			/>
			<h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
			<p className="text-neutral-400 mb-2">{member.role}</p>
			<Link
				href={member.link}
				target="_blank"
				className="text-indigo-400 hover:underline text-sm"
			>
				View Profile
			</Link>
		</div>
	);
}

export default function TeamPage() {
	return (
		<Container className="py-40">
			<Heading>Our Team</Heading>
			<Subheading className="max-w-3xl mx-auto mb-10">
				Meet the MLDA Robo Team members across different academic years.
			</Subheading>
			<div className="space-y-16">
				{teams.map((team) => (
					<div key={team.year}>
						<h2 className="text-3xl font-bold text-white mb-6">
							{team.year}
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
							{team.members.map((member: any) => (
								<TeamMemberCard member={member} key={member.name} />
							))}
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}