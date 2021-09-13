import SkillItem from "../components/SkillItem";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import {
	SiNextDotJs,
	SiJavascript,
	SiJquery,
	SiVueDotJs,
	SiTailwindcss,
	SiReact,
	SiLaravel,
	SiSass,
	SiGithub,
	SiGitlab,
	SiHtml5,
	SiCss3,
	SiSvelte,
	SiNuxtDotJs,
	SiPhp,
	SiMysql,
	SiPostgresql,
	SiMongodb,
	SiFirebase,
	SiDocker,
	SiLumen,
	SiNodeDotJs,
	SiPaypal,
	SiStrapi,
	SiJira,
	SiBootstrap,
	SiGit,
} from "react-icons/si";
const SkillList = () => {
	return (
		<ul className="grid grid-cols-6 text-gray-400 text-5xl gap-x-6 gap-y-12">
			<SkillItem Icon={SiJavascript} tag={"javascript"} />
			<SkillItem Icon={SiPhp} tag={"php"} />

			{/* <SkillItem Icon={SiMysql} /> */}
			<SkillItem Icon={SiPostgresql} tag={"postgre"} />
			<SkillItem Icon={SiFirebase} tag={"firebase"} />
			{/* <SkillItem Icon={SiMongodb} bg={'dark:bg-green-400'} /> */}

			<SkillItem Icon={SiLaravel} tag={"laravel"} />
			<SkillItem Icon={SiReact} tag={"react"} />
			<SkillItem Icon={SiVueDotJs} tag={"vue"} />
			{/* <SkillItem Icon={SiSvelte} bg={'dark:bg-green-400'} /> */}
			<SkillItem Icon={SiJquery} tag={"jquery"} />

			<SkillItem Icon={SiNextDotJs} tag={"next"} />
			{/* <SkillItem Icon={SiNuxtDotJs} bg={'dark:bg-green-400'} /> */}
			<SkillItem Icon={SiLumen} tag={"lumen"} />

			<SkillItem Icon={SiHtml5} tag={"html"} />
			<SkillItem Icon={SiCss3} tag={"css"} />

			<SkillItem Icon={SiSass} tag={"sass"} />
			<SkillItem Icon={SiTailwindcss} tag={"tailwind"} />
			<SkillItem Icon={SiBootstrap} tag={"bootstrap"} />

			{/* <SkillItem Icon={SiJira} bg={'dark:bg-green-400'} /> */}
			<SkillItem Icon={SiGit} tag={"git"} />
			{/* <SkillItem Icon={SiGithub} bg={'dark:bg-green-400'} /> */}
			{/* <SkillItem Icon={SiGitlab} bg={'dark:bg-green-400'} /> */}

			<SkillItem Icon={SiDocker} tag={"docker"} />
			{/* <SkillItem Icon={SiPaypal} /> */}
			{/* <SkillItem Icon={SiStrapi} /> */}
			<SkillItem Icon={SiNodeDotJs} tag={"node"} />
		</ul>
	);
};

export default SkillList;
