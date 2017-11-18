import {Platform} from "../entities/platform";
import {Character} from "../entities/character";


export class Level {

  groundPhysicsGroup : Phaser.Group

  constructor (
    public game : Phaser.Game,
    public character : Character
  ) {
    // Load sprite
    this.groundPhysicsGroup = this.game.add.physicsGroup();
  }

  createPlatform() {
    let platform = new Platform(this.game, this.groundPhysicsGroup, 100, 500, 100, 50, "ground");
  }

  update () {
    // Happens every frame
    this.game.physics.arcade.collide(this.character.sprite, this.groundPhysicsGroup);
    this.character.update();
  }
}
