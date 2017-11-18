import {Platform} from "../entities/platform";

export class Level {

  groundPhysicsGroup : Phaser.Group

  constructor (
    public game : Phaser.Game
  ) {
    // Load sprite
    this.groundPhysicsGroup = this.game.add.physicsGroup();
  }

  createPlatform() {
    let platform = new Platform(this.game, this.groundPhysicsGroup, 100, 100, 100, 50, "ground");
  }

  update () {
    // Happens every frame
  }
}
