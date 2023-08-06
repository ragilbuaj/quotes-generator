function buttonNext({onClick}) {
	const style = {
		fill: "rgba(0, 0, 0, 1)",
		transform: "scaleX(-1)",
		msFilter:
			"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)",
	};
	return (
		<button className='flex items-center gap-2' onClick={onClick}>
			<p className='font-Merriweather uppercase tracking-wider text-sm'>next</p>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
				viewBox='0 0 24 24'
				style={style}
			>
				<path d='m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z'></path>
			</svg>
		</button>
	);
}

export default buttonNext;
