const NavItem = ({ title }) => {
	return (
		<li className="mr-5">
			<a href="" className="hover:text-yellow-500 default-transition">
				{title}
			</a>
		</li>
	);
};

export default NavItem;
