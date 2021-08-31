import { Actor } from './actor';

export class Missile extends Actor {
	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y, 'player_missile');
	}

	fire(x: number, y: number): void {
		this.body.reset(x, y);

		this.setScale(0.1);

		this.setActive(true);
		this.setVisible(true);
		this.setVelocityY(-400);
	}

	preUpdate(time: number, delta: number): void {
		super.preUpdate(time, delta);

		if (this.y <= -32) {
			this.setActive(false);
			this.setVisible(false);
		}
	}
}
