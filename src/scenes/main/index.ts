import { GameObjects, Scene } from 'phaser';
import { Missiles } from '../../classes/missiles';
import { Player } from '../../classes/player';

export class MainScene extends Scene {
	private player!: Player;
	missiles!: Missiles;

	constructor() {
		super('main-scene');
	}

	create(): void {
		this.missiles = new Missiles(this);

		this.player = new Player(
			this,
			window.innerWidth / 2,
			window.innerHeight - 100
		);

		this.input.on('pointerdown', () => {
			this.missiles.fireMissile(this.player.x, this.player.y);
		});
	}

	update(): void {
		this.player.update();
	}
}
