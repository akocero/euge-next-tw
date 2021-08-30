import { FiGithub, FiLink } from "react-icons/fi";
import Tag from "./Tag";
import ButtonLink from "./ButtonLink";

const ProjectCard = ({ data }) => {
	return (
		<div className="dark:bg-gray-800 bg-gray-100 p-6 rounded-md border-gray-200 dark:border-gray-900 border">
			<h3 className="text-xl font-bold mb-2">{data.title}</h3>
			<p className="text-gray-600 dark:text-gray-200 font-semibold">
				{data.body}
			</p>
			<div className="mt-6">
				{data.tags.map((tag) => (
					<Tag type={tag} size={"xs"} key={tag} />
				))}
			</div>
			<div className="mt-6">
				<ButtonLink Icon={FiGithub} />
				<ButtonLink Icon={FiLink} />
			</div>
		</div>
	);
};

export default ProjectCard;
