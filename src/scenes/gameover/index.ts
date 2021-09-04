import { Scene } from 'phaser';

interface GameoverData {
	score: number;
}

export class GameoverScene extends Scene {
	private finalScore!: number;
	constructor() {
		super('gameover-scene');
	}

	init({ score }: GameoverData): void {
		this.finalScore = score;
	}

	create() {
		const screenCenterX =
			this.cameras.main.worldView.x + this.cameras.main.width / 2;
		const screenCenterY =
			this.cameras.main.worldView.y + this.cameras.main.height / 2;
		this.add
			.text(screenCenterX, screenCenterY, 'Game Over', {
				fontSize: '50px',
			})
			.setOrigin(0.5);

		this.add
			.text(screenCenterX, screenCenterY + 50, 'Score: ' + this.finalScore, {
				fontSize: '50px',
			})
			.setOrigin(0.5);
	}
}
