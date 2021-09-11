import { FiGithub, FiLink, FiFolder } from "react-icons/fi";
import Tag from "./Tag";
import ButtonLink from "./ButtonLink";

const ProjectCard = ({ data }) => {
	return (
		<div className="dark:bg-primary bg-gray-100 p-6 rounded-md border-gray-200 border dark:border-0">
			<div className="mb-6 flex">
				<ButtonLink Icon={FiFolder} />
				<div className="ml-auto">
					<ButtonLink Icon={FiGithub} />
					<ButtonLink Icon={FiLink} />
				</div>
			</div>

			<h3 className="text-lg mb-2 font-semibold mt-2">{data.title}</h3>
			<label htmlFor="" className="text-yellow-500 text-regular ">
				{data.subtitle}
			</label>

			<p className="text-gray-600 dark:text-gray-400 mt-2">{data.body}</p>
			<div className="mt-6">
				{data.tags.map((tag) => (
					<Tag type={tag} size={"sm"} key={tag} />
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
