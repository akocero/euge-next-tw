const ExpiItem = ({ data }) => {
	return (
		<div>
			<h4 className="text-yellow-500 text-regular ">{data.title}</h4>
			<label className="text-gray-500 text-sm ">{data.position}</label>
			<p className="text-gray-400 mt-3 text-sm">{data.body}</p>
		</div>
	);
};

export default ExpiItem;
