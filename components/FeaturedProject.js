import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiFacebook,
	FiInstagram,
	FiLink,
} from "react-icons/fi";
import Image from "next/image";

const FeaturedProject = ({ project, left = false }) => {
	const { title, subtitle, body, tools, github, website, image } =
		project.fields;
	return (
		<article className="flex">
			<div className="relative w-3/5 featured-img z-20">
				<div className="rounded-2xl featured-img-container">
					{image && (
						<Image
							src={"https:" + image.fields.file.url}
							alt={title}
							width={image.fields.file.details.image.width}
							height={image.fields.file.details.image.height}
						/>
						// <img src={"https:" + image.fields.file.url} alt="" />
					)}
				</div>
			</div>

			<div className="w-2/5 relative z-10 flex flex-col h-full featured-content">
				<h3 className="text-2xl dark:text-green-400 text-green-500  font-bold">
					{title}
				</h3>
				<label className="text-md dark:text-gray-300 text-gray-700 dark:font-normal font-semibold">
					{subtitle}
				</label>

				<p className="text-md dark:text-gray-400 text-gray-900 mt-4 dark:font-semibold font-bold">
					{body}
				</p>

				<div className="mt-8 flex content-end text-gray-700 dark:text-gray-100">
					<a className="mr-4 text-2xl">
						<FiGithub />
					</a>
					<a className="mr-4 text-2xl">
						<FiLink />
					</a>
				</div>
			</div>
		</article>
	);
};

export default FeaturedProject;
