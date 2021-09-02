import { Missile } from './missile';

export class Missiles extends Phaser.Physics.Arcade.Group {
	constructor(scene: Phaser.Scene) {
		super(scene.physics.world, scene);
	}

	fireMissile(x: number, y: number): void {
		const missile: Missile = this.getFirstDead(false);

		if (missile) {
			missile.fire(x, y);
		}
	}
}
