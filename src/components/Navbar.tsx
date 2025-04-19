function Navbar() {
	return (
		<nav className="px-6 py-4 list-none">
			<div className="max-w-4xl mx-auto w-full flex items-center justify-center gap-10">
				<div className="text-xl font-bold text-white mr-20">Victor</div>
				<ul className="hidden md:flex list-none gap-6 text-white font-medium">
					<li className="hover:text-blue-400 transition">Documentation</li>
					<li className="hover:text-blue-400 transition">Code</li>
					<li className="hover:text-blue-400 transition">Releases</li>
					<li className="hover:text-blue-400 transition">Discussion Forum</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
