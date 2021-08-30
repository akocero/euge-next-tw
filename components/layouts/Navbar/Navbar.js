import { FiGithub, FiLink, FiMoon, FiSun } from "react-icons/fi";
import NavItem from "./NavItem";

const Navbar = ({ toggleDarkMode, dark }) => {
	return (
		<header className="flex h-20 items-center max-w-screen-xl mx-auto ">
			<h1 className="font-bold">eugene badato.</h1>
			<div className="ml-auto">
				<ul className="flex">
					<NavItem title={"Home"} />
					<NavItem title={"Projects"} />
					<NavItem title={"Experiences"} />
					<NavItem title={"About"} />
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
		</header>
	);
};

export default Navbar;
