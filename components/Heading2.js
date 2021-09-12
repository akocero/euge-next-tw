const Heading2 = ({ data }) => {
	return (
		<div className={`mb-14 ${data.textAlign}`}>
			<h2 className="font-bold text-4xl dark:text-3xl text-gray-700 dark:text-gray-200 drop-shadow dark:drop-shadow-none">
				{data.title}
			</h2>
			<label
				htmlFor=""
				className="dark:text-yellow-500  text-yellow-600 text-lg drop-shadow dark:drop-shadow-none"
			>
				{data.subtitle}
			</label>
		</div>
	);
};

export default Heading2;
