import Tag from "./Tag";
const SkillItem = ({ Icon, tag }) => {
	return (
		<li className="has-tooltip relative">
			<div
				className={`dark:bg-primary dark:border-0 bg-gray-100 border border-gray-200 rounded-full flex flex-col items-center justify-center h-24 w-24 mx-auto`}
			>
				<Icon />
				{/* <span className="text-lg">LinkedIn</span> */}
				{/* <span class="tooltip rounded shadow p-1 bg-gray-100 text-gray-900 font-bold -mb-36 text-sm">
					Javascript
				</span> */}
				<Tag
					type={tag}
					size={"sm"}
					key={tag}
					tooltip={"tooltip -mb-32"}
				/>
			</div>
		</li>
	);
};

export default SkillItem;
