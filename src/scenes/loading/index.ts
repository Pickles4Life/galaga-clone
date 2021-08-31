import { Scene } from 'phaser';

export class LoadingScene extends Scene {
	constructor() {
		super('loading-scene');
	}

	preload(): void {
		this.load.baseURL = 'assets/';
		this.load.image('ship', 'sprites/ship.png');
		this.load.image('player_missile', 'sprites/player_missile.png');
	}

	create(): void {
		this.scene.start('main-scene');
	}
}
