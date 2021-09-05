import Tag from "./Tag";
const SkillItem = ({ Icon }) => {
	return (
		<li className="has-tooltip relative">
			<div className=" bg-gray-100 border border-gray-200 rounded-full flex flex-col items-center justify-center h-24 w-24 mx-auto">
				<Icon />
				{/* <span className="text-lg">LinkedIn</span> */}
				{/* <span class="tooltip rounded shadow p-1 bg-gray-100 text-gray-900 font-bold -mb-36 text-sm">
					Javascript
				</span> */}
				<Tag
					type={"laravel"}
					size={"sm"}
					key={"laravel"}
					tooltip={"tooltip -mb-36"}
				/>
			</div>
		</li>
	);
};

export default SkillItem;
