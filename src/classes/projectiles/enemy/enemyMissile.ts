import { Missile } from '../missile';

export class EnemyMissile extends Missile {
	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y, 'enemy_missile');
	}

	fire(x: number, y: number): void {
		super.fire(x, y);

		this.setScale(0.01);

		this.setVelocityY(400);
	}

	preUpdate(time: number, delta: number): void {
		super.preUpdate(time, delta);

		if (this.y >= 600) {
			this.destroySelf();
		}
	}
}
