import { FiGithub, FiLink, FiMoon, FiSun } from "react-icons/fi";

const ProjectCard = () => {
	return (
		<div className="dark:bg-gray-800 bg-gray-100 p-6 rounded-md border-gray-200 dark:border-gray-900 border">
			<h3 className="text-2xl font-bold mb-2">Title</h3>
			<p className="text-gray-600 dark:text-gray-200 font-semibold">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
				perspiciatis asperiores quas, quaerat.
			</p>
			<div className="mt-6">
				<span className="bg-yellow-300 text-yellow-900 border border-yellow-400 rounded-full px-3 py-1 font-semibold mr-2 inline-block mb-2">
					#firebase
				</span>
				<span className="bg-red-500 text-red-100 border border-red-600 rounded-full px-3 py-1 font-semibold mr-2 inline-block mb-2">
					#laravel
				</span>

				<span className="bg-yellow-200 text-gray-800 border border-yellow-300 rounded-full px-3 py-1 font-semibold mr-2 inline-block mb-2">
					#javascript
				</span>
			</div>
			<div className="mt-6">
				<button className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-100 text-xl border border-gray-300 dark:border-gray-700 mr-3">
					<FiGithub />
				</button>
				<button className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-100 text-xl border border-gray-300 dark:border-gray-700 mr-3">
					<FiLink />
				</button>
			</div>
		</div>
	);
};

export default ProjectCard;
