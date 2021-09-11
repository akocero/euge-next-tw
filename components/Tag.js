import React, { useState, useEffect } from "react";
const Tag = ({ type, size, tooltip = "" }) => {
	const [tagColor, setTagColor] = useState("");
	const generateStyle = (type) => {
		if (type === "laravel") {
			setTagColor("bg-red-500 text-red-100");
		}

		if (type === "firebase") {
			setTagColor("bg-yellow-300 text-yellow-900");
		}

		if (type === "javascript") {
			setTagColor("bg-yellow-200 text-gray-800");
		}

		if (type === "vue") {
			setTagColor("bg-green-500 text-white");
		}
	};

	useEffect(() => {
		generateStyle(type);
	}, []);

	return (
		<span
			className={` ${tagColor} ${tooltip} rounded-full px-3 py-0.5 mr-2 font-medium inline-block mb-2 text-${size}`}
		>
			#{type}
		</span>
	);
};

export default Tag;
