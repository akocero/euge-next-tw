import { FiGithub, FiLink, FiFolder } from "react-icons/fi";
import Tag from "./Tag";
import ButtonLink from "./ButtonLink";

const ProjectCard = ({ data }) => {
	return (
		<div className="dark:bg-primary bg-gray-100 text-gray-400  p-6 rounded-xl border-gray-200 border dark:border-0">
			<div className="mb-6 flex text-2xl text-gray-700 dark:text-gray-300">
				<a href="">
					<FiFolder />
				</a>

				<div className="ml-auto">
					<a href="" className="inline-block mr-4">
						<FiGithub />
					</a>
					<a href="" className="inline-block">
						<FiLink />
					</a>
				</div>
			</div>

			<h3 className="text-lg font-semibold mt-2 text-yellow-500">
				{data.title}
			</h3>
			<label htmlFor="" className="text-regular text-gray-500">
				{data.subtitle}
			</label>

			<p className="text-gray-600 dark:text-gray-300 mt-4">{data.body}</p>
			<div className="mt-6">
				{data.tags.map((tag) => (
					<Tag type={tag} size={"sm"} key={tag} />
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
