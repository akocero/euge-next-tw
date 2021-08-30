import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/layouts/Navbar/Navbar";
import ButtonCTA from "../components/ButtonCTA";
import ButtonLink from "../components/ButtonLink";
import Tag from "../components/Tag";
export default function Home() {
	const [dark, setDark] = useState(false);

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
		<div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
			<Navbar toggleDarkMode={toggleDarkMode} dark={dark} />
			<main>
				<section className="flex items-center -mt-12 justify-center h-screen">
					<div className="w-2/5">
						<h1>Lorem ipsum dolor sit amet.</h1>
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
				<section className="h-screen max-w-screen-xl mx-auto py-6">
					<h2 className="font-bold text-4xl mb-10">
						selected projects.
					</h2>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
						<ProjectCard />
					</div>
				</section>
				<section className="h-screen max-w-screen-xl mx-auto py-6">
					<h2 className="font-bold text-4xl mb-10">skills.</h2>
					<div>
						<Tag type={"laravel"} size={"xl"} />
						<Tag type={"vue"} size={"xl"} />
						<Tag type={"javascript"} size={"xl"} />
						<Tag type={"firebase"} size={"xl"} />
					</div>
				</section>
			</main>
		</div>
	);
}
