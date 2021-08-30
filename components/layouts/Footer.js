import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="text-center font-semibold py-6 bg-gray-100 dark:bg-gray-900  text-gray-700 dark:text-gray-100 ">
			<div className="w-1/3 mx-auto">
				<p className=" p-4">
					Find an issue with this page? Fix it on{" "}
					<span className="text-yellow-500">GitHub</span>
				</p>
				<hr className="border-dashed border-gray-300 dark:border-gray-800 border-0 border-b-2 w-1/2 mx-auto mb-5" />
				<p className="pb-3">
					Copyright © 2021 Pelikula <br /> Created with{" "}
					<img
						src="/images/firebase.svg"
						alt=""
						className="w-4 inline pb-2"
					/>{" "}
					<img
						src="/images/vue.svg"
						alt=""
						className="w-5 inline pb-2"
					/>{" "}
					by Eugene Paul Badato
				</p>
				<hr className="border-dashed border-gray-300 dark:border-gray-800 border-0 border-b-2 w-1/2 mx-auto mb-7" />
				<div className="flex text-2xl w-1/2 justify-between pb-4 mx-auto">
					<a href="">
						<FiGithub />
					</a>
					<a href="">
						<FiFacebook />
					</a>
					<a href="">
						<FiLinkedin />
					</a>
					<a href="">
						<FiTwitter />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
