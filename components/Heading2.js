const Heading2 = ({ data }) => {
	return (
		<div className={`mb-14 ${data.textAlign}`}>
			<h2 className="font-bold text-4xl dark:text-3xl text-gray-800 dark:text-gray-200">
				{data.title}
			</h2>
			<label
				htmlFor=""
				className="dark:text-yellow-500  text-yellow-600 text-lg"
			>
				{data.subtitle}
			</label>
		</div>
	);
};

export default Heading2;
