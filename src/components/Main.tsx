function Main() {
	return (
		<main className="relative flex-1 flex flex-col items-center justify-start text-center px-4 pt-12">
			<svg
				width="320"
				height="320"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-360 h-360 opacity-90 mt-20"
			>
				<path
					d="M288.8 186c0-13.86-58.64-85.92-58.64-85.92H187.04v93.1h28.2c2.22 0 3.34 2.66 1.8 4.26l-30 30.8v24.74h19.72S288.8 199.86 288.8 186Zm-76.72-18.36c0-7.3 3.28-13.24 7.34-13.24 4.06 0 7.34 5.92 7.34 13.24s-3.28 13.24-7.34 13.24c-4.06 0-7.34-5.92-7.34-13.24ZM147.5 197.44a2.52 2.52 0 0 1 1.8-4.26h28.2V100.08H134.38S75.74 172.14 75.74 186s82.04 66.98 82.04 66.98h19.72v-24.74l-30-30.8Zm-9.7-29.8c0-7.3 3.28-13.24 7.34-13.24 4.06 0 7.34 5.92 7.34 13.24s-3.28 13.24-7.34 13.24c-4.06 0-7.34-5.92-7.34-13.24ZM291.86 176.52s1.06-102.86-4.96-108.86-51.6 32.42-51.6 32.42 17.24 14.6 56.56 76.46v-.02ZM28.3 134.16c-4.12 7.42 45.38 40.68 45.38 40.68s9.3-20.6 57.9-75.44c0 0-99.16 27.34-102.28 34.76Z"
					fill="currentColor"
				/>
			</svg>

			<div className="z-10">
				<h1 className="text-4xl font-bold text-white mb-4">
					Victor - Vector Database for IA and RAG
				</h1>
				<p className="text-lg text-white mb-6">
					The best vector database for your projects
				</p>
				<button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
					<a href="https://github.com/victor-base" className="text-inherit">
						Show me the code!
					</a>
				</button>
			</div>
		</main>
	);
}

export default Main;
