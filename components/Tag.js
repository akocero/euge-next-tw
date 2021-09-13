import React, { useState, useEffect } from "react";
const Tag = ({ type, size, tooltip = "" }) => {
	const [tagColor, setTagColor] = useState("");
	const generateStyle = (type) => {
		if (type === "laravel") {
			setTagColor("text-red-600");
		}

		if (type === "react") {
			setTagColor("text-blue-400");
		}

		if (type === "tailwind") {
			setTagColor("text-blue-300");
		}

		if (type === "jquery") {
			setTagColor("text-blue-500");
		}

		if (type === "node") {
			setTagColor("text-green-500");
		}

		if (type === "next") {
			setTagColor("text-gray-200");
		}

		if (type === "php") {
			setTagColor("text-indigo-500");
		}

		if (type === "postgre") {
			setTagColor("text-indigo-300");
		}

		if (type === "lumen") {
			setTagColor("text-red-300");
		}

		if (type === "html") {
			setTagColor("text-yellow-600");
		}

		if (type === "css") {
			setTagColor("text-blue-500");
		}

		if (type === "sass") {
			setTagColor("text-red-500");
		}

		if (type === "bootstrap") {
			setTagColor("text-indigo-700");
		}

		if (type === "git") {
			setTagColor("text-black");
		}

		if (type === "docker") {
			setTagColor("text-blue-400");
		}

		if (type === "firebase") {
			setTagColor("text-yellow-400");
		}

		if (type === "javascript") {
			setTagColor("text-yellow-200");
		}

		if (type === "vue") {
			setTagColor("text-green-500");
		}
	};

	useEffect(() => {
		generateStyle(type);
	}, []);

	return (
		<span
			className={`dark:bg-gray-800 bg-gray-200  dark:text-gray-300 text-gray-700 ${tooltip} rounded-full px-3 py-0.5 mr-2 font-regular inline-block mb-2 text-${size}`}
		>
			${type}
		</span>
	);
};

export default Tag;
