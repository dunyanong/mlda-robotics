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
		title: "NTU EEE",
		image: {
			url: "/ntueee.jpg",
			alternativeText: "NTU EEE Logo",
		},
	},
	{
		id: 2,
		title: "MLDA@EEE",
		image: {
			url: "/mlda.jpg",
			alternativeText: "MLDA@EEE Logo",
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
								className="h-20 w-40 sm:h-32 sm:w-56 md:h-40 md:w-72 lg:h-52 lg:w-[28rem] object-contain filter"
								draggable={false}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};
