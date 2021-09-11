import Head from "next/head";
import Image from "next/image";
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiFacebook,
	FiLink,
} from "react-icons/fi";
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/layouts/Navbar/Navbar";
import Footer from "../components/layouts/Footer";
import ButtonCTA from "../components/ButtonCTA";
import ButtonLink from "../components/ButtonLink";
import Tag from "../components/Tag";
import SkillList from "../components/SkillList";

export default function Home() {
	const [dark, setDark] = useState(true);
	const [lastScroll, setLastScroll] = useState(0);
	const [scrollState, setScrollState] = useState("");

	useEffect(() => {
		const onScroll = (e) => {
			const currentScroll = window.pageYOffset;

			if (currentScroll > lastScroll) {
				setScrollState("scroll-down");
			}

			if (currentScroll < lastScroll) {
				setScrollState("scroll-up");
			}

			if (currentScroll <= 0) {
				setScrollState("");
			}

			setLastScroll(currentScroll);
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollState, lastScroll]);

	useEffect(() => {
		if (dark) {
			document.body.classList.add("dark");
			console.log("sadasdsad");
		} else {
			document.body.classList.remove("dark");
		}
	}, [dark]);

	const toggleDarkMode = () => {
		setDark(!dark);
	};

	return (
		<div className="bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200">
			<Navbar
				toggleDarkMode={toggleDarkMode}
				dark={dark}
				isScrollingDown={scrollState}
			/>
			<main className="max-w-screen-lg mx-auto">
				<section className="flex items-center justify-center h-screen">
					<div className="w-1/6">
						{/* <Image src="/images/me.png" width={200} height={200} /> */}
					</div>
					<div className="w-5/6 intro relative">
						{/* <div className=""></div> */}
						<label className="text-xl ">
							Hello, It's Eugene from Manila
						</label>
						<h2 className="font-bold text-6xl leading-tight">
							Let my{" "}
							<span className="text-yellow-500">portfolio</span>{" "}
							describe me.
						</h2>
						<div className="flex mt-8">
							<ButtonCTA />
							{/* <div className="">
								<ButtonLink Icon={FiGithub} />
								<ButtonLink Icon={FiFacebook} />
								<ButtonLink Icon={FiLinkedin} />
								<ButtonLink Icon={FiTwitter} />
							</div> */}
						</div>
					</div>
				</section>

				<section className="mb-20">
					<div className="mb-14">
						<h2 className="font-bold text-3xl ">featured works.</h2>
						<label htmlFor="" className="text-yellow-500 text-lg ">
							What i do now?
						</label>
					</div>
					<article className="flex">
						{/* <div className="absolute top-0 left-0 w-3/6 h-full justify-center flex flex-col"></div> */}
						{/* <div className="w-3/5"> */}
						<div className="relative w-3/5 featured-img">
							<img
								src="/images/pelikula-land.png"
								alt=""
								width="94%"
								className="rounded-2xl"
							/>
							{/* <img
								src="/images/pelikula-port.png"
								alt=""
								className="absolute top-0 right-10 scale-90 translate-y-20 rotate-2 filter drop-shadow-2xl rounded-lg"
							/> */}
						</div>

						{/* </div> */}
						<div className="w-2/5 z-10 flex flex-col h-full featured-content">
							<div className="mb-8">
								<ButtonLink Icon={FiGithub} />
								<ButtonLink Icon={FiLink} />
							</div>
							<span class="text-md text-yellow-500">
								Serverless Website Application
							</span>
							<h3 className="text-3xl font-semibold mb-6">
								PelikulaPH
							</h3>

							<p className=" font-light ">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Animi quas in necessitatibus
								id perferendis error odit incidunt expedita
								sequi. Minus.
							</p>
						</div>
					</article>
				</section>
				<section className="py-6">
					<div className="mb-14">
						<h2 className="font-bold text-3xl ">
							noteworthy projects.
						</h2>
						<label htmlFor="" className="text-yellow-500 text-lg ">
							What i have done?
						</label>
					</div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						<ProjectCard
							data={{
								title: "PelikulaPH",
								subtitle: "Imdb + Mobilarian Alternative",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "HxH API",
								subtitle: "Hunter x Hunter Open Source API",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "eugeCSS",
								subtitle: "CSS Library",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "Payroll Enterprise Cloud",
								subtitle: "Payroll System in Cloud Platform",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "Barangay Automation System",
								subtitle:
									"Automated Information System with Google Map Locator",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "Point of Sale",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
					</div>
				</section>
				{/* <section className="max-w-screen-xl mx-auto py-6">
					<h2 className="font-bold text-4xl mb-10">skills.</h2>
					<SkillList />
				</section> */}
				<section className="py-6">
					<h2 className="font-bold text-4xl mb-10">experieces</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Omnis numquam suscipit placeat, exercitationem eum
						aperiam nam ipsum iusto id sequi?
					</p>

					<div className="flex overflow-x-scroll">
						<div className="flex items-center  w-full py-8">
							{/* <Image
								className="rounded-lg"
								src="/images/1.jpg"
								layout="fill"
								className="object-contain w-full relative"
							/> */}

							<img
								src="/images/1.jpg"
								alt=""
								className="rounded-lg mr-5 max-w-sm"
							/>
							<img
								src="/images/1.jpg"
								alt=""
								className="rounded-lg mr-5 max-w-sm"
							/>
							<img
								src="/images/1.jpg"
								alt=""
								className="rounded-lg mr-5 max-w-sm"
							/>
							<img
								src="/images/1.jpg"
								alt=""
								className="rounded-lg mr-5 max-w-sm"
							/>
							<img
								src="/images/1.jpg"
								alt=""
								className="rounded-lg mr-5 max-w-sm"
							/>
						</div>
					</div>
				</section>
			</main>
			<Footer dark={dark} />
		</div>
	);
}
