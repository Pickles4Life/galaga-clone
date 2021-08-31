const sizeChanged = (): void => {
	if (window.game.isBooted) {
		setTimeout(() => {
			window.game.scale.resize(window.innerWidth, window.innerHeight);

			window.game.canvas.setAttribute(
				'style',
				`display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
			);
		}, 100);
	}
};

export default sizeChanged;
