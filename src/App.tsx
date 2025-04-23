import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Releases from './pages/Releases';
import Documentation from './pages/Documentation';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';

function AppContent() {
	const location = useLocation();

	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/releases" element={<Releases />} />
				<Route path="/documentation" element={<Documentation />} />
			</Routes>
			{location.pathname !== '/releases' && <Footer />}
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
