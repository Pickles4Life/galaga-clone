import { Missiles } from './missiles';
import { PlayerMissile } from './playerMissile';

export class PlayerMissiles extends Missiles {
	constructor(scene: Phaser.Scene) {
		super(scene);

		this.createMultiple({
			frameQuantity: 10,
			key: 'player_missile',
			active: false,
			visible: false,
			classType: PlayerMissile,
		});
	}
}
