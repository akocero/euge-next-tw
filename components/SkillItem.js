import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const SkillItem = () => {
	return (
		<li className="bg-gray-100 border border-gray-200 flex flex-col items-center justify-center h-24 rounded-md">
			<FiLinkedin />
			<span className="text-lg">LinkedIn</span>
		</li>
	);
};

export default SkillItem;
