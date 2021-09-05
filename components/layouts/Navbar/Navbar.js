import { FiGithub, FiLink, FiMoon, FiSun } from "react-icons/fi";
import NavItem from "./NavItem";

const Navbar = ({ toggleDarkMode, dark, isScrollingDown }) => {
	return (
		<header
			className={`fixed top-0 left-0 w-full flex h-20 items-center transition-all duration-300  ${
				isScrollingDown == "scroll-down" ? "-top-full" : ""
			} ${
				isScrollingDown == "scroll-up"
					? "bg-white dark:bg-gray-800 shadow z-50 h-16"
					: ""
			}`}
		>
			<div className="flex justify-between w-full max-w-screen-xl mx-auto">
				<h1 className="font-semibold">eugene badato.</h1>
				<div className="ml-auto">
					<ul className="flex">
						<NavItem title={"Home"} />
						<NavItem title={"Projects"} />
						<NavItem title={"Experiences"} />
						<NavItem title={"About"} />
						<NavItem title={"Skills"} />
						<li className="ml-4">
							{dark ? (
								<button
									onClick={() => toggleDarkMode()}
									className="text-2xl hover:text-yellow-500 transition ease-in duration-150"
								>
									<FiMoon />
								</button>
							) : (
								<button
									onClick={() => toggleDarkMode()}
									className="text-2xl hover:text-yellow-500 transition ease-in duration-150"
								>
									<FiSun />
								</button>
							)}
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
