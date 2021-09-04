import { MainScene } from 'src/scenes';
import { Actor } from './actor';
import { EnemyMissile } from './projectiles/enemy/enemyMissile';

export class Player extends Actor {
	private keyA: Phaser.Input.Keyboard.Key;
	private keyD: Phaser.Input.Keyboard.Key;

	constructor(scene: MainScene, x: number, y: number) {
		super(scene, x, y, 'ship');

		this.keyA = this.scene.input.keyboard.addKey('A');
		this.keyD = this.scene.input.keyboard.addKey('D');

		this.setScale(0.05);
		this.getBody().setSize(550, 650);
		this.getBody().setOffset(300, 175);
	}

	update(): void {
		this.getBody().setVelocity(0);

		if (this.keyA?.isDown) {
			this.body.velocity.x = -500;
		}

		if (this.keyD?.isDown) {
			this.body.velocity.x = 500;
		}
	}
}
