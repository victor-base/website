import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="px-6 py-4">
			<div className="max-w-4xl mx-auto w-full flex items-center justify-between text-white">
				<div className="text-xl font-bold">
					<Link to="/" className="text-inherit">
						Victor
					</Link>
				</div>

				<button
					className="md:hidden text-white"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				<ul className="hidden md:flex gap-6 font-medium">
					<li className="hover:text-blue-400 transition">
						<Link to="/documentation">Documentation</Link>
					</li>
					<li className="hover:text-blue-400 transition">
						<a
							href="https://github.com/victor-base"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code
						</a>
					</li>
					<li className="hover:text-blue-400 transition">
						<Link to="/colaborators">Colaborators</Link>
					</li>
					<li className="hover:text-blue-400 transition">
						<a
							href="https://discord.me/victorbase"
							target="_blank"
							rel="noopener noreferrer"
						>
							Discord Community
						</a>
					</li>
				</ul>
			</div>

			{isOpen && (
				<div className="md:hidden mt-4 flex flex-col gap-4 text-white font-medium text-center">
					<Link
						to="/documentation"
						className="hover:text-blue-400"
						onClick={() => setIsOpen(false)}
					>
						Documentation
					</Link>
					<a
						href="https://github.com/victor-base"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-blue-400"
					>
						Code
					</a>
					<Link
						to="/colaborators"
						className="hover:text-blue-400"
						onClick={() => setIsOpen(false)}
					>
						Colaborators
					</Link>
					<a
						href="https://discord.gg/7CjXwcWb"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-blue-400"
					>
						Discord Community
					</a>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
