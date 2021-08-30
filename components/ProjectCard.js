import { FiGithub, FiLink } from "react-icons/fi";
import Tag from "./Tag";
import ButtonLink from "./ButtonLink";

const ProjectCard = () => {
	return (
		<div className="dark:bg-gray-800 bg-gray-100 p-6 rounded-md border-gray-200 dark:border-gray-900 border">
			<h3 className="text-2xl font-bold mb-2">Title</h3>
			<p className="text-gray-600 dark:text-gray-200 font-semibold">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
				perspiciatis asperiores quas, quaerat.
			</p>
			<div className="mt-6">
				<Tag type={"laravel"} size={"xs"} />
				<Tag type={"vue"} size={"xs"} />
				<Tag type={"javascript"} size={"xs"} />
				<Tag type={"firebase"} size={"xs"} />
			</div>
			<div className="mt-6">
				<ButtonLink Icon={FiGithub} />
				<ButtonLink Icon={FiLink} />
			</div>
		</div>
	);
};

export default ProjectCard;
