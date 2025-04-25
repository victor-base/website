import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Documentation from './pages/Documentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppContent() {
	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/documentation" element={<Documentation />} />
			</Routes>
			<Footer />
		</div>
	);
}

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

export default App;
