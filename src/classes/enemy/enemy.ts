import { Actor } from '../actor';

export class Enemy extends Actor {
	constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
		super(scene, x, y, texture);
	}
}
