import { GameObjects, Math, Scene } from 'phaser';
import { kill } from 'process';
import { BaseEnemy } from 'src/classes/baseEnemy';
import { Missile } from 'src/classes/missile';
import { BaseEnemies } from '../../classes/baseEnemies';
import { Missiles } from '../../classes/missiles';
import { Player } from '../../classes/player';

export class MainScene extends Scene {
	private player!: Player;
	private missiles!: Missiles;
	private baseEnemies!: BaseEnemies;

	constructor() {
		super('main-scene');
	}

	create(): void {
		this.missiles = new Missiles(this);
		this.baseEnemies = new BaseEnemies(this);

		this.player = new Player(
			this,
			this.cameras.main.centerX,
			this.cameras.main.y + 570
		);

		this.input.on('pointerdown', () => {
			this.missiles.fireMissile(this.player.x, this.player.y);
		});

		this.physics.add.overlap(
			this.missiles,
			this.baseEnemies,
			(missile, enemy) => {
				this.baseEnemies.killEnemy(enemy as BaseEnemy, missile as Missile);
			}
		);

		let trueIndex = 0;

		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 2; j++) {
				let targetPos = new Math.Vector2(i * 50 + 150, j * 50 + 50);
				(this.baseEnemies.getChildren()[trueIndex] as BaseEnemy).setTargetPos(
					targetPos
				);
				trueIndex += 1;
			}
		}
		this.time.addEvent({
			delay: 400,
			callback: () => {
				this.baseEnemies.spawnEnemy(0, 400);
			},
			loop: true,
		});
	}

	update(): void {
		this.player.update();
	}
}
