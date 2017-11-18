export class SplashState extends Phaser.State {
  loaderBg: Phaser.Sprite;
  loaderBar: Phaser.Sprite;

  cursors: Phaser.CursorKeys;
  banner: Phaser.Text;

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

    let background = this.add.tileSprite(0, 0, 1024, 576, 'background');
    background.fixedToCamera = true;
    this.banner = this.add.text(350, this.game.height / 2, "Press UP to play!", {});
    this.banner.font = 'Nunito';
    this.banner.fontSize = 40;
    this.banner.fill = '#ffffff';
    this.banner.align = "center";45
    this.banner.anchor.setTo(0, 0);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    // this.game.state.start('Game');

    this.cursors.up.onDown.add( () => { this.game.state.start('Game'); });
  }
}
