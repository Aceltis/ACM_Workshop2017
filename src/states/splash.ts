export class SplashState extends Phaser.State {
  loaderBg: Phaser.Sprite;
  loaderBar: Phaser.Sprite;

  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');

    this.load.setPreloadSprite(this.loaderBar);
    //
    // load your assets
    //
    this.load.spritesheet('runner', './assets/images/runner_spritesheet.png', 50, 50);
  }

  create () {
    this.game.state.start('Game');
  }
}
