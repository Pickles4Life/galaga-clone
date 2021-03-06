import { BaseEnemy } from './baseEnemy';
import { MainScene } from 'src/scenes';
import { PlayerMissile } from '../projectiles/player/playerMissile';

export class BaseEnemies extends Phaser.Physics.Arcade.Group {
	constructor(scene: Phaser.Scene) {
		super(scene.physics.world, scene);

		this.createMultiple({
			frameQuantity: 20,
			key: 'base_enemy',
			active: false,
			visible: false,
			classType: BaseEnemy,
		});
	}

	spawnEnemy(x: number, y: number): void {
		const enemy: BaseEnemy = this.getFirstDead();

		if (enemy) {
			enemy.spawn(x, y);
		}
	}

	killEnemy(enemy: BaseEnemy, missile: PlayerMissile): void {
		if (missile.active && enemy.active) {
			enemy.killSelf();
			missile.destroySelf();
			(this.scene as MainScene).incrementScore(1);
		}
	}
}
