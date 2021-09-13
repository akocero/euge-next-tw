const ExpiItem = ({ data }) => {
	return (
		<div>
			<h4 className="dark:text-green-400 text-green-600 text-regular font-bold dark:font-semibold text-lg">
				{data.title}
			</h4>
			<label className="dark:text-gray-500 text-gray-500 text-sm ">
				{data.position}
			</label>
			<p className="dark:text-gray-400 text-gray-600 font-semibold dark:font-normal mt-3 text-base">
				{data.body}
			</p>
		</div>
	);
};

export default ExpiItem;
