import { Link } from 'react-router-dom';

const languages = [
	{ name: 'C', path: 'https://github.com/victor-base/libvictor' },
	{
		name: 'C#',
		path: 'https://github.com/victor-base/VictorCsharpBinding-SDK',
	},
	{ name: 'Java', path: 'https://github.com/victor-base/victor' },
	{ name: 'Golang', path: 'https://github.com/victor-base/victorgo' },
	{ name: 'JavaScript', path: 'https://github.com/victor-base/victorjs' },
	{ name: 'Python', path: 'https://github.com/victor-base/victorpy' },
];

const Documentation = () => {
	return (
		<div className="min-h-screen text-white py-12 px-6">
			<div className="max-w-4xl mx-auto text-center">
				<h1 className="text-4xl font-bold mb-6">Documentation</h1>
				<p className="text-gray-300 mb-10">
					Select a language to explore its documentation.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{languages.map((lang) => (
						<Link
							key={lang.name}
							to={lang.path}
							className="bg-[#444] hover:bg-[#0066cc] transition text-white font-semibold py-4 px-6 rounded-lg shadow-md text-lg text-center"
							target="_blank"
						>
							{lang.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Documentation;
