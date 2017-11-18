import {GameState} from "../states/game";

export class Platform {
    sprite: Phaser.TileSprite;
    constructor (
        public game: GameState,
        public x: number,
        public y: number,
        public w: number,
        public h: number,
        public assetID: string
    ) {
        // Load sprite
        this.sprite = this.game.add.tileSprite(x, y, w, h, assetID);
    }

    update () {
        // Happens every frame
    }
}
