const ButtonLink = ({ Icon }) => {
	return (
		<button className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-100 text-xl border  dark:border-gray-700 mr-3">
			<Icon />
		</button>
	);
};

export default ButtonLink;
