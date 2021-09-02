import { Actor } from './actor';

export class Missile extends Actor {
	constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
		super(scene, x, y, texture);
	}

	fire(x: number, y: number): void {
		this.body.reset(x, y);

		this.setActive(true);
		this.setVisible(true);
		this.setVelocityY(-400);
	}

	destroySelf(): void {
		this.setActive(false);
		this.setVisible(false);
	}
}
