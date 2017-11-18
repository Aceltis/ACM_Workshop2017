import {Platform} from "../entities/platform";
import {Character} from "../entities/character";


export class Level {

  groundPhysicsGroup : Phaser.Group;
  platforms : Platform[] = [];
  time : number = 0;

  constructor (
    public game : Phaser.Game,
    public character : Character
  ) {
    // Load sprite
    this.groundPhysicsGroup = this.game.add.physicsGroup();
  }

  createPlatform(x : number, y : number) {
    let platform = new Platform(this.game, this.groundPhysicsGroup, x, y, 100, 50, "ground");
    this.platforms.push(platform)
  }

  spawnPlatforms() {
    this.time += this.game.time.elapsed;


    if( this.time > 3000 ) {
      this.createPlatform(this.game.width, 300 + Math.random() * 200);
      this.time = 0;
      console.log("spawn platform");
    }


  }

  update () {
    // Happens every frame
    this.game.physics.arcade.collide(this.character.sprite, this.groundPhysicsGroup);
    this.game.physics.arcade.collide(this.groundPhysicsGroup, this.character.sprite);
    this.character.update();
    this.platforms.forEach(platform => platform.update());

    this.spawnPlatforms();

  }
}
