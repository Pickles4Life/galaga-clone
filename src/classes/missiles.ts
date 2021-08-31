import { Actor } from './actor';
import { Missile } from './missile';

export class Missiles extends Phaser.Physics.Arcade.Group {
	constructor(scene: Phaser.Scene) {
		super(scene.physics.world, scene);

		this.createMultiple({
			frameQuantity: 4,
			key: 'player_missile',
			active: false,
			visible: false,
			classType: Missile,
		});
	}

	fireMissile(x: number, y: number): void {
		const missile: Missile = this.getFirstDead(false);

		if (missile) {
			missile.fire(x, y);
		}
	}
}
