const Heading2 = ({ data }) => {
	return (
		<div className={`mb-14 ${data.textAlign}`}>
			<h2 className="font-bold text-3xl ">{data.title}</h2>
			<label htmlFor="" className="text-yellow-500 text-lg ">
				{data.subtitle}
			</label>
		</div>
	);
};

export default Heading2;
