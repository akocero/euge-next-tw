export default function handler(req, res) {
	const projects = [
		{
			title: "PelikulaPH",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis asperiores quas, quaerat.",
			tag: ["javascript", "laravel", "furebase", "vue"],
		},
		{
			title: "Barangay Automated System",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis asperiores quas, quaerat.",
			tag: ["javascript", "laravel", "furebase", "vue"],
		},
	];

	res.status(200).json(projects);
}
