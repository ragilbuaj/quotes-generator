import "../App.css";
import ButtonPrevious from "../components/button-previous.jsx";
import ButtonNext from "../components/button-next.jsx";

function Landing() {
	return (
		<section className='bg-white drop-shadow-lg p-4 rounded-md w-10/12'>
			<div className='bg-background-colors p-7 rounded-sm'>
				<div className='flex items-center justify-between'>
					<ButtonPrevious />
					<ButtonNext />
				</div>
				<p className='font-Merriweather text-lg mt-10'>"Hello New Yorker"</p>
				<p className='font-sans uppercase text-end tracking-wide mt-10'>
					Oppenheimer
				</p>
			</div>
		</section>
	);
}

export default Landing;
