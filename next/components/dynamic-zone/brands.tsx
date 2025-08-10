"use client";
import { useEffect, useState } from "react";
import { Heading } from "../elements/heading";
import { Subheading } from "../elements/subheading";
import { AnimatePresence, motion } from "framer-motion";
import { CustomImage } from "@/components/ui/image";

// Hardcoded logos data
const defaultLogos = [
	{
		id: 1,
		title: "NTU",
		image: {
			url: "https://upload.wikimedia.org/wikipedia/en/f/f9/Nanyang_Technological_University.png",
			alternativeText: "NTU Logo",
		},
	},
	{
		id: 2,
		title: "MLDA",
		image: {
			url: "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%23000080'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='28' font-family='Arial, sans-serif'%3eMLDA%3c/text%3e%3c/svg%3e",
			alternativeText: "MLDA Logo",
		},
	},
	{
		id: 3,
		title: "ROS",
		image: {
			url: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg",
			alternativeText: "ROS Logo",
		},
	},
	{
		id: 4,
		title: "ICRA",
		image: {
			url: "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%23FF6B35'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='24' font-family='Arial, sans-serif'%3eICRA%3c/text%3e%3c/svg%3e",
			alternativeText: "ICRA Logo",
		},
	},
	{
		id: 5,
		title: "CasADi",
		image: {
			url: "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%232E8B57'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='22' font-family='Arial, sans-serif'%3eCasADi%3c/text%3e%3c/svg%3e",
			alternativeText: "CasADi Logo",
		},
	},
	{
		id: 6,
		title: "Python",
		image: {
			url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
			alternativeText: "Python Logo",
		},
	},
	{
		id: 7,
		title: "C++",
		image: {
			url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
			alternativeText: "C++ Logo",
		},
	},
	{
		id: 8,
		title: "OpenCV",
		image: {
			url: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
			alternativeText: "OpenCV Logo",
		},
	},
];

export const Brands = ({
	heading = "Backed by Excellence",
	sub_heading = "Supported by world-class institutions and powered by cutting-edge technology.",
	logos = defaultLogos,
}: {
	heading?: string;
	sub_heading?: string;
	logos?: any[];
}) => {
	const logosToUse = logos && logos.length > 0 ? logos : defaultLogos;

	const middleIndex = Math.floor(logosToUse.length / 2);
	const firstHalf = logosToUse.slice(0, middleIndex);
	const secondHalf = logosToUse.slice(middleIndex);
	const logosArraySplitInHalf = [firstHalf, secondHalf];

	// State to track the current logo set
	let [stateLogos, setLogos] = useState(logosArraySplitInHalf);
	const [activeLogoSet, setActiveLogoSet] = useState(stateLogos[0]);

	const flipLogos = () => {
		// Shift the logos array and update the active logo set
		setLogos((currentLogos) => {
			const newLogos = [...currentLogos.slice(1), currentLogos[0]];
			setActiveLogoSet(newLogos[0]); // Update the active set
			return newLogos;
		});
	};

	useEffect(() => {
		// Flip logos every 3 seconds
		const timer = setTimeout(() => {
			flipLogos();
		}, 3000);

		return () => clearTimeout(timer); // Clear timeout on component unmount or state update
	}, [activeLogoSet]); // Depend on activeLogoSet to trigger flip every time it changes

	return (
		<div className="relative z-20 py-10 md:py-40">
			<Heading className="pt-4">{heading}</Heading>
			<Subheading className="max-w-3xl mx-auto">{sub_heading}</Subheading>

			<div className="flex gap-10 flex-wrap justify-center md:gap-40 relative h-full w-full mt-20">
				<AnimatePresence mode="popLayout">
					{activeLogoSet.map((logo, idx) => (
						<motion.div
							initial={{
								y: 40,
								opacity: 0,
								filter: "blur(10px)",
							}}
							animate={{
								y: 0,
								opacity: 1,
								filter: "blur(0px)",
							}}
							exit={{
								y: -40,
								opacity: 0,
								filter: "blur(10px)",
							}}
							transition={{
								duration: 0.8,
								delay: 0.1 * idx,
								ease: [0.4, 0, 0.2, 1],
							}}
							key={logo.title}
							className="relative"
						>
							<CustomImage
								src={logo.image?.url}
								alt={logo.image?.alternativeText || logo.title}
								width={400}
								height={400}
								className="md:h-20 md:w-60 h-10 w-40 object-contain filter"
								draggable={false}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};
