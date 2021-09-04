import { Math, Scene } from 'phaser';
import { BaseEnemy } from '../../classes/enemy/baseEnemy';
import { PlayerMissiles } from '../../classes/projectiles/player/playerMissiles';
import { BaseEnemies } from '../../classes/enemy/baseEnemies';
import { Player } from '../../classes/player';
import { PlayerMissile } from '../../classes/projectiles/player/playerMissile';
import { EnemyMissiles } from '../../classes/projectiles/enemy/enemyMissiles';
import { EnemyMissile } from 'src/classes/projectiles/enemy/enemyMissile';

export class MainScene extends Scene {
	private player!: Player;
	private playerMissiles!: PlayerMissiles;
	private enemyMissiles!: EnemyMissiles;
	private baseEnemies!: BaseEnemies;
	private score!: number;

	private scoreText!: Phaser.GameObjects.Text;

	constructor() {
		super('main-scene');
		this.score = 0;
	}

	create(): void {
		this.playerMissiles = new PlayerMissiles(this);
		this.enemyMissiles = new EnemyMissiles(this);
		this.baseEnemies = new BaseEnemies(this);
		this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '20px' });

		this.player = new Player(
			this,
			this.cameras.main.centerX,
			this.cameras.main.y + 570
		);

		this.input.on('pointerdown', () => {
			this.playerMissiles.fireMissile(this.player.x, this.player.y);
		});

		this.physics.add.overlap(
			this.playerMissiles,
			this.baseEnemies,
			(missile, enemy) => {
				this.baseEnemies.killEnemy(
					enemy as BaseEnemy,
					missile as PlayerMissile
				);
			}
		);

		this.physics.add.overlap(
			this.enemyMissiles,
			this.player,
			(player, missile) => {
				if (missile.active) {
					this.scene.start('gameover-scene', { score: this.score });
				}
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
		(this.baseEnemies.getChildren() as BaseEnemy[]).forEach((enemy) => {
			if (enemy.active && !enemy.isShooting) {
				enemy.isShooting = true;
				this.time.addEvent({
					delay: Math.Between(500, 5000),
					callback: () => {
						this.enemyMissiles.fireMissile(enemy.x, enemy.y);
						enemy.isShooting = false;
					},
				});
			}
		});
	}

	incrementScore(increaseAmount: number): void {
		this.score += increaseAmount;
		this.scoreText.setText('Score: ' + this.score);
	}
}
