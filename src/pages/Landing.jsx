import "../App.css";
import ButtonPrevious from "../components/button-previous.jsx";
import ButtonNext from "../components/button-next.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";

function Landing() {
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");
	const [toogle, setToogle] = useState(true);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const options = {
			method: "GET",
			url: "https://quotes15.p.rapidapi.com/quotes/random/",
			headers: {
				"X-RapidAPI-Key": "c1f6b76c1cmshab8c206e0c38c92p189ba5jsnc9f59dc6582f",
				"X-RapidAPI-Host": "quotes15.p.rapidapi.com",
			},
		};

		async function fetch() {
			try {
				const response = await axios.request(options);
				const data = response.data;
				setContent(data.content);
				setAuthor(data.originator.name);
			} catch (error) {
				console.error(error);
			}
		}

		fetch();
		setLoading(false);
	}, [toogle]);

	function handleClick() {
		setToogle(!toogle);
	}

	return (
		<section className='bg-white drop-shadow-lg p-4 rounded-md w-10/12 lg:w-1/2'>
			<div className='bg-background-colors p-7 rounded-sm'>
				<div className='flex items-center justify-end'>
					<ButtonNext onClick={handleClick} />
				</div>
				{loading ? (
					<p className='text-center font-sans text-2xl'>Loading...</p>
				) : (
					<>
						<p className='font-Merriweather text-lg mt-10'>"{content}"</p>
						<p className='font-sans uppercase text-end tracking-wide mt-10'>
							{author}
						</p>
					</>
				)}
			</div>
		</section>
	);
}

export default Landing;
