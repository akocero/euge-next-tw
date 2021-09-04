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
			<SkillItem Icon={SiJavascript} />
			<SkillItem Icon={SiPhp} />

			<SkillItem Icon={SiMysql} />
			<SkillItem Icon={SiPostgresql} />
			<SkillItem Icon={SiFirebase} />
			<SkillItem Icon={SiMongodb} />

			<SkillItem Icon={SiLaravel} />
			<SkillItem Icon={SiReact} />
			<SkillItem Icon={SiVueDotJs} />
			<SkillItem Icon={SiSvelte} />
			<SkillItem Icon={SiJquery} />

			<SkillItem Icon={SiNextDotJs} />
			<SkillItem Icon={SiNuxtDotJs} />
			<SkillItem Icon={SiLumen} />

			<SkillItem Icon={SiHtml5} />
			<SkillItem Icon={SiCss3} />

			<SkillItem Icon={SiSass} />
			<SkillItem Icon={SiTailwindcss} />
			<SkillItem Icon={SiBootstrap} />

			<SkillItem Icon={SiJira} />
			<SkillItem Icon={SiGit} />
			<SkillItem Icon={SiGithub} />
			<SkillItem Icon={SiGitlab} />

			<SkillItem Icon={SiDocker} />
			<SkillItem Icon={SiPaypal} />
			<SkillItem Icon={SiStrapi} />
			<SkillItem Icon={SiNodeDotJs} />
		</ul>
	);
};

export default SkillList;
