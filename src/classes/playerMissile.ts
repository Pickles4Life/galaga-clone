import { Missile } from './missile';

export class PlayerMissile extends Missile {
	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y, 'player_missile');
	}

	fire(x: number, y: number): void {
		super.fire(x, y);

		this.setScale(0.05);
	}

	preUpdate(time: number, delta: number): void {
		super.preUpdate(time, delta);

		if (this.y <= -32) {
			this.destroySelf();
		}
	}
}
