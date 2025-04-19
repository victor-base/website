function Main() {
	return (
		<main className="relative flex-1 flex items-center justify-center">
			<img
				src="/logo.png"
				alt="VictorDB"
				className="absolute w-[400px] h-[400px] opacity-20 object-contain z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
			/>
			<div className="relative z-10 text-center px-4">
				<h1 className="text-4xl font-bold text-white mb-4">
					Victor - Vector Database for IA and RAG
				</h1>
				<p className="text-lg text-white mb-6">
					The best vector database for your projects
				</p>
				<button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
					Show me the code!
				</button>
			</div>
		</main>
	);
}

export default Main;
