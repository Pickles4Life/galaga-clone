import { Types } from 'phaser';
import { LoadingScene, MainScene } from '../scenes';
import sizeChanged from './sizeChanged';

const gameConfig: Types.Core.GameConfig = {
	title: 'Galaga',
	type: Phaser.WEBGL,
	parent: 'game',
	scale: {
		mode: Phaser.Scale.ScaleModes.NONE,
		width: window.innerWidth,
		height: window.innerHeight,
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			debugShowBody: true,
		},
	},
	callbacks: {
		postBoot: () => {
			sizeChanged();
		},
	},
	autoFocus: true,
	canvasStyle: `display: block; width: 100%; height: 100%;`,
	scene: [LoadingScene, MainScene],
};

export default gameConfig;
