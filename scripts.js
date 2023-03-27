	// Create blocks
	const background = document.querySelector('.background');
	for (let i = 0; i < 100; i++) {
		const block = document.createElement('div');
		block.classList.add('block');
		background.appendChild(block);
	}

// Animate blocks
	gsap.to('.block', {
		duration: 2,
		x: 'random(-500, 500)',
		y: 'random(-500, 500)',
		scale: 0.1,
		stagger: {
			amount: 0.4,
			grid: 'auto',
			from: 'random'
		},
		repeat: -1,
		ease: 'power2.inOut'
	});
