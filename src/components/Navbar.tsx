import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="px-6 py-4 list-none">
			<div className="max-w-4xl mx-auto w-full flex items-center justify-center gap-10">
				<div className="text-xl font-bold text-white mr-20">
					<Link to="/" className="text-inherit">
						Victor
					</Link>
				</div>
				<ul className="hidden md:flex list-none gap-6 text-white font-medium">
					<li className="hover:text-blue-400 transition">
						<Link to="/documentation" className="text-inherit">
							Documentation
						</Link>
					</li>
					<li className="hover:text-blue-400 transition">
						<a
							href="https://github.com/victor-base"
							className="text-inherit"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code
						</a>
					</li>
					<li className="hover:text-blue-400 transition">Discord Community</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
