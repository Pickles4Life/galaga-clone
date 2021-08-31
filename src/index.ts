import gameConfig from './utils/config';
import sizeChanged from './utils/sizeChanged';

window.game = new Phaser.Game(gameConfig);

window.onresize = () => sizeChanged();
