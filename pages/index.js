import Head from "next/head";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/layouts/Navbar/Navbar";
import Footer from "../components/layouts/Footer";
import ButtonCTA from "../components/ButtonCTA";
import ButtonLink from "../components/ButtonLink";
import Tag from "../components/Tag";
import SkillItem from "../components/SkillItem";
export default function Home() {
	const [dark, setDark] = useState(true);

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
			<Navbar toggleDarkMode={toggleDarkMode} dark={dark} />
			<main>
				<section className="flex items-center -mt-12 justify-center h-screen">
					<div className="w-2/5">
						{/* <Image src="/images/me.png" width={200} height={200} /> */}
					</div>
					<div className="w-3/5">
						<h1 className="text-2xl ">
							Hello, It's Eugene from Manila
						</h1>
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
				<section className="max-w-screen-xl mx-auto py-6">
					<h2 className="font-bold text-4xl mb-10">
						selected projects.
					</h2>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
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
				<section className="max-w-screen-xl mx-auto py-6">
					<h2 className="font-bold text-4xl mb-10">skills.</h2>
					<ul className="grid grid-cols-10 text-gray-400 text-5xl gap-2 ">
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
						<SkillItem />
					</ul>
				</section>
				<section className="max-w-screen-xl mx-auto py-6">
					<h2 className="font-bold text-4xl mb-10">experiences.</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Omnis numquam suscipit placeat, exercitationem eum
						aperiam nam ipsum iusto id sequi?
					</p>

					<div className="flex overflow-x-scroll ">
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
