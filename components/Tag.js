import React, { useState, useEffect } from "react";
const Tag = ({ type, size }) => {
	const [tagColor, setTagColor] = useState("");
	const generateStyle = (type) => {
		if (type === "laravel") {
			setTagColor("bg-red-500 text-red-100 border border-red-600");
		}

		if (type === "firebase") {
			setTagColor(
				"bg-yellow-300 text-yellow-900 border border-yellow-400"
			);
		}

		if (type === "javascript") {
			setTagColor("bg-yellow-200 text-gray-800 border border-yellow-300");
		}

		if (type === "vue") {
			setTagColor("bg-green-500 text-white border border-green-600");
		}
	};

	useEffect(() => {
		generateStyle(type);
	}, []);

	return (
		<span
			className={` ${tagColor} rounded-full px-3 py-1 font-semibold mr-2 inline-block mb-2 text-${size}`}
		>
			#{type}
		</span>
	);
};

export default Tag;
