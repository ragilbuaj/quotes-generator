import "./App.css";
import Landing from "./pages/Landing.jsx";

function App() {
	return (
		<main className='h-screen bg-background-colors flex flex-col gap-10 justify-center items-center'>
			<div>
				<h1 className='font-Merriweather font-bold text-3xl'>
					Quotes Generator
				</h1>
				<p className='text-center text-sm'>built by Ragil Budhi Ajie</p>
			</div>
			<Landing />
		</main>
	);
}

export default App;
