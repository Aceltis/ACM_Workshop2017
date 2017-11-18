import {Character} from "../entities/character";
import {Platform} from "../entities/platform";
import {Level} from "../entities/level";

export class GameState extends Phaser.State {
  character: Character;
  level : Level

  init () {}
  preload () {}

  create () {
    let banner = this.add.text(0, 0, "Let's make a game!", {});
    banner.font = 'Nunito';
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.anchor.setTo(0, 0);

    this.level = new Level(this.game);
    this.level.createPlatform();
    this.character = new Character(this.game, this.physics, 0, 0, "abc");

}

  render () {}

  update() {
      this.character.update();
  }

  preRender () {
      this.character.preRender();
  }
}
