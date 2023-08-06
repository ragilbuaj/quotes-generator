function buttonPrevious() {
	return (
		<div className='flex items-center gap-2'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
				viewBox='0 0 24 24'
			>
				<path d='m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z'></path>
			</svg>
			<p className='font-Merriweather uppercase tracking-wider text-sm'>
				previous
			</p>
		</div>
	);
}

export default buttonPrevious;
