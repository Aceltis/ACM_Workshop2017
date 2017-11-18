export class GameState extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let banner = this.add.text(0, 0, "Let's make a game!", {});
    banner.font = 'Nunito';
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.anchor.setTo(0, 0);

    let mushroom = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "mushroom");
    mushroom.anchor.setTo(0.5, 0.5);
  }

  render () {}
}
