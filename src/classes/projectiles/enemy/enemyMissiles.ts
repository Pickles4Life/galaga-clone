import { Missiles } from '../missiles';
import { EnemyMissile } from './enemyMissile';

export class EnemyMissiles extends Missiles {
	constructor(scene: Phaser.Scene) {
		super(scene);

		this.createMultiple({
			frameQuantity: 30,
			key: 'enemy_missile',
			active: false,
			visible: false,
			classType: EnemyMissile,
		});
	}
}
