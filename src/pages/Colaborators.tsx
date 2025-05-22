function Colaborators() {
	const colaborators = [
		{ name: 'Emiliano', role: 'Backend Developer', image: '/emiliano.jpg' },
		{ name: 'Ariel', role: 'Backend Developer', image: '/ariel-pardo.jpg' },
		{ name: 'Laura', role: 'Backend Developer', image: '/laura.jpg' },
		{
			name: 'Henry Alvarez',
			role: 'Full Stack Developer',
			image: '/henry.jpg',
		},
		{
			name: 'Juan Pablo',
			role: 'Full Stack Developer',
			image: '/juan-pablo.jpg',
		},
		{ name: 'Juan', role: 'Backend Developer', image: '/juan-irigon.jpg' },
		{
			name: 'Martin',
			role: 'Full Stack Developer',
			image: '/martin-lopez.jpg',
		},
		{ name: 'Ivan', role: 'Backend Developer', image: '/ivan.jpg' },
		{ name: 'Agustin', role: 'Backend Developer', image: '/agustin.png' },
		{
			name: 'Ezequiel',
			role: 'Backend Developer',
			image: '/ezequiel-lorenzo.jpg',
		},
	];

	return (
		<section
			id="colaborators"
			className="py-20"
			style={{ backgroundColor: '#1f1f1f' }}
		>
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold mb-6 text-white">Colaborators</h2>
				<p className="text-lg mb-10 text-gray-300">
					These people contributed to the development of Victor Database:
				</p>

				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{colaborators.map((colab, index) => (
						<li
							key={index}
							className="p-6 rounded-lg shadow hover:scale-105 transition-transform"
							style={{ backgroundColor: '#454545' }}
						>
							<img
								src={colab.image}
								alt={colab.name}
								className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-2 border-gray-400"
							/>
							<h3 className="text-xl font-semibold text-white">{colab.name}</h3>
							<p className="text-sm text-gray-300">{colab.role}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Colaborators;
