import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Documentation from './pages/Documentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function AppContent() {
	return (
		<div className="h-screen flex flex-col relative overflow-hidden bg-[#1e1e1e] text-white shadow">
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
