import {Character} from "../entities/character";
import {Platform} from "../entities/platform";
import {Level} from "../entities/level";

export class GameState extends Phaser.State {
  character: Character;
  level : Level

  init () {}
  preload () {}

  create () {
    let background = this.add.tileSprite(0, 0, 1024, 576, 'background');
    background.fixedToCamera = true;
    let banner = this.add.text(350, 20, "You must survive!", {});
    banner.font = 'Nunito';
    banner.fontSize = 40;
    banner.fill = '#ffffff';
    banner.align = "center";
    banner.anchor.setTo(0, 0);

    this.character = new Character(this.game, this.physics, 0, 0);
    this.level = new Level(this.game, this.character);
    this.level.createPlatform(300, 500);
    this.level.createPlatform(600, 440);
}

  render () {}

  update() {
    this.level.update();
  }

}
