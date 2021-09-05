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
					<div className="w-2/5">
						{/* <Image src="/images/me.png" width={200} height={200} /> */}
					</div>
					<div className="w-3/5">
						<label className="text-2xl ">
							Hello, It's Eugene from Manila
						</label>
						<h2 className="font-bold text-7xl leading-tight">
							Let my{" "}
							<span className="text-yellow-500">portfolio</span>{" "}
							describe me.
						</h2>
						<div className="flex mt-8">
							<ButtonCTA />
							<div className="">
								<ButtonLink Icon={FiGithub} />
								<ButtonLink Icon={FiFacebook} />
								<ButtonLink Icon={FiLinkedin} />
								<ButtonLink Icon={FiTwitter} />
							</div>
						</div>
					</div>
				</section>

				<section className="mb-20">
					<h2 className="font-bold text-4xl mb-20">
						featured works.
					</h2>
					<article className="flex">
						{/* <div className="absolute top-0 left-0 w-3/6 h-full justify-center flex flex-col"></div> */}
						<div className="w-3/5">
							<img
								src="/images/pelikula-land.png"
								alt=""
								className="-rotate-2 scale-105 ml-4"
							/>
						</div>
						<div className="w-2/5 z-10 flex flex-col h-full text-right">
							<span class="text-md text-gray-600">
								Serverless Web App
							</span>
							<h3 className="text-2xl font-semibold mb-6">
								PelikulaPH
							</h3>

							<p className="bg-gray-800 py-4 px-6 rounded-lg shadow bg-opacity-75">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Animi quas in necessitatibus
								id perferendis error odit incidunt expedita
								sequi. Minus.
							</p>
							<div className="pt-12">
								<ButtonLink Icon={FiGithub} />
								<ButtonLink Icon={FiLink} />
							</div>
						</div>
					</article>
				</section>
				<section className="py-6">
					<h2 className="font-bold text-4xl mb-10">
						noteworthy projects.
					</h2>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						<ProjectCard
							data={{
								title: "PelikulaPH",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "HxH API (Hunter x Hunter API)",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "eugecss (CSS Framework)",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "PelikulaPH",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "HxH API (Hunter x Hunter API)",
								body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore itaque delectus eos nam.",
								tags: ["laravel", "javascript", "firebase"],
							}}
						/>
						<ProjectCard
							data={{
								title: "eugecss (CSS Framework)",
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
