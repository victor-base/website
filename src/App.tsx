import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<div className="h-screen flex flex-col">
				<Navbar />
				<Main />
				<Footer />
			</div>
		</>
	);
}

export default App;
