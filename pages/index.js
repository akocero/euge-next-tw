import Head from "next/head";
import Image from "next/image";
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiFacebook,
	FiInstagram,
	FiLink,
} from "react-icons/fi";
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/layouts/Navbar/Navbar";
import Footer from "../components/layouts/Footer";
import ButtonCTA from "../components/ButtonCTA";
import ButtonLink from "../components/ButtonLink";
import ExpiItem from "../components/ExpiItem";
import SkillList from "../components/SkillList";
import Heading2 from "../components/Heading2";
import { createClient } from "contentful";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const res = await client.getEntries({
		content_type: "music",
	});

	return {
		props: {
			projects: res.items,
		},
	};
}

export default function Home({ projects }) {
	const [dark, setDark] = useState(true);
	const [lastScroll, setLastScroll] = useState(0);
	const [scrollState, setScrollState] = useState("");

	useEffect(() => {
		console.log("projects", projects);
	}, []);

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
			<ul className="links flex flex-col items-start fixed bottom-4 left-10 text-xl text-gray-800 dark:text-gray-200">
				<li className="mb-4 dark:bg-primary bg-gray-100 p-3 rounded-full border-gray-300 border dark:border-gray-800">
					<FiGithub />
				</li>

				<li className="mb-4 dark:bg-primary bg-gray-100 p-3 rounded-full border-gray-300 border dark:border-gray-800">
					<FiLinkedin />
				</li>
				<li className="mb-4 dark:bg-primary bg-gray-100 p-3 rounded-full border-gray-300 border dark:border-gray-800">
					<FiTwitter />
				</li>
				<li className="mb-4 dark:bg-primary bg-gray-100 p-3 rounded-full border-gray-300 border dark:border-gray-800">
					<FiFacebook />
				</li>
			</ul>
			<main className="max-w-screen-lg mx-auto">
				<section className="flex items-center justify-center h-screen">
					<div className="w-1/6">
						{/* <Image src="/images/me.png" width={200} height={200} /> */}
					</div>
					<div className="w-5/6 intro relative z-10">
						{/* <div className=""></div> */}
						<label className="text-xl ">
							Hello, It's Eugene from Manila
						</label>
						<h1 className="text-7xl leading-tight font-extrabold drop-shadow-xl dark:drop-shadow-none">
							Let my{" "}
							<span className="text-green-500">portfolio</span>{" "}
							describe me.
						</h1>
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

				<section className="">
					<Heading2
						data={{
							title: "featured projects",
							subtitle: "What i do now?",
						}}
					/>
					<article className="flex">
						<div className="relative w-3/5 featured-img z-20">
							<img
								src="/images/pelikula-land.png"
								alt=""
								width="94%"
								className="rounded-2xl"
							/>
						</div>

						<div className="w-2/5 relative z-10 flex flex-col h-full featured-content">
							<h3 className="text-2xl dark:text-green-400 text-green-500  font-bold">
								PelikulaPH
							</h3>
							<label className="text-md dark:text-gray-300 text-gray-700 dark:font-normal font-semibold">
								IMDB + Mobilarian Alternative
							</label>

							<p className="text-md dark:text-gray-400 text-gray-900 mt-4 dark:font-semibold font-bold">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Animi quas in necessitatibus
								id perferendis error odit incidunt expedita
								sequi. Minus. Lorem ipsum dolor, sit amet
								consectetur adipisicing elit. Animi quas in
								necessitatibus id perferendis error odit
								incidunt expedita sequi. Minus.
							</p>

							<div className="mt-8 flex content-end text-gray-700 dark:text-gray-100">
								<a className="mr-4 text-2xl">
									<FiGithub />
								</a>
								<a className="mr-4 text-2xl">
									<FiLink />
								</a>
							</div>
						</div>
					</article>
				</section>
				<section className="">
					<Heading2
						data={{
							title: "noteworthy projects",
							subtitle: "What i have done?",
							textAlign: "text-center",
						}}
					/>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						<ProjectCard
							data={{
								title: "PelikulaPH",
								subtitle: "Imdb + Mobilarian Alternative",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["vue", "firebase", "sass"],
							}}
						/>
						<ProjectCard
							data={{
								title: "HxH API",
								subtitle: "Hunter x Hunter Open Source API",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["lumen", "php", "laravel"],
							}}
						/>
						<ProjectCard
							data={{
								title: "eugeCSS",
								subtitle: "CSS Library",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["sass", "javascript", "css", "html"],
							}}
						/>
						<ProjectCard
							data={{
								title: "Payroll Enterprise Cloud",
								subtitle: "Payroll System in Cloud Platform",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "vue", "bootstrap"],
							}}
						/>
						<ProjectCard
							data={{
								title: "Barangay Automation System",
								subtitle:
									"Automated Information System with Google Map Locator",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: [
									"laravel",
									"bootstrap",
									"javascript",
									"jquery",
								],
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

				<section className="">
					<Heading2
						data={{
							title: "experiences",
							subtitle: "I envolved with?",
						}}
					/>

					<div className="grid grid-cols-3 gap-8">
						<ExpiItem
							data={{
								title: "Mustard Seed Systems Corp.",
								position: "Jr. Web Developer",
								body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae aspernatur error sed ad harum veniam quod.",
							}}
						/>

						<ExpiItem
							data={{
								title: "FbCadCam Software Services.",
								position: "Assoc. Software Developer",
								body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati minima quia ab officia eum, a quo adipisci cupiditate delectus facere?",
							}}
						/>

						<ExpiItem
							data={{
								title: "STI College",
								position: "Game Development Instructor",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci beatae consectetur unde.",
							}}
						/>

						<ExpiItem
							data={{
								title: "eugeSoftware (Freelancing)",
								position:
									"Self Employed, Full Stack Developer, UI/UX",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi aut iste.",
							}}
						/>
					</div>
				</section>
				<section className="">
					<Heading2
						data={{
							title: "Skills",
							subtitle: "What tool I use?",
							textAlign: "text-center",
						}}
					/>
					<SkillList />
				</section>
				<section className="">
					<Heading2
						data={{
							title: "About Me",
							subtitle: "What I love?",
							textAlign: "text-center",
						}}
					/>
					<div className="grid grid-cols-3 gap-4 grid-rows-6">
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary row-span-2">
							<img
								src="/images/1.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary">
							<img
								src="/images/2.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary">
							<img
								src="/images/3.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary row-span-2">
							<img
								src="/images/4.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary">
							<img
								src="/images/5.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary">
							<img
								src="/images/6.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary row-span-2">
							<img
								src="/images/7.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary">
							<img
								src="/images/8.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
						<div className="rounded-xl overflow-hidden opacity-30 hover:opacity-100 h-auto bg-primary">
							<img
								src="/images/9.jpg"
								alt=""
								className="h-full object-cover"
							/>
						</div>
					</div>
				</section>
			</main>
			<Footer dark={dark} />
		</div>
	);
}
