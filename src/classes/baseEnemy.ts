import { Math } from 'phaser';
import { Enemy } from './enemy';

export class BaseEnemy extends Enemy {
	private targetPos!: Phaser.Math.Vector2;
	constructor(scene: Phaser.Scene, x: number, y: number) {
		super(scene, x, y, 'base_enemy');
	}

	spawn(x: number, y: number): void {
		this.body.reset(x, y);

		this.scene.physics.moveTo(this, this.targetPos.x, this.targetPos.y, 300);

		this.setScale(0.1);
		this.getBody().setSize(350, 350);

		this.setActive(true);
		this.setVisible(true);
	}

	killSelf(): void {
		this.setActive(false);
		this.setVisible(false);
	}

	setTargetPos(targetPos: Math.Vector2): void {
		this.targetPos = targetPos;
	}

	preUpdate(time: number, delta: number): void {
		super.preUpdate(time, delta);

		const distance = Math.Distance.Between(
			this.x,
			this.y,
			this.targetPos.x,
			this.targetPos.y
		);

		if (distance < 4) {
			this.body.reset(this.targetPos.x, this.targetPos.y);
		}
	}
}
