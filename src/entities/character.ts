export class Character {

    private sprite: Phaser.Sprite;
    private cursors: Phaser.CursorKeys;

    constructor (
        public game: Phaser.Game,
        public x: number,
        public y: number,
        public assetUrl: string
    ) {
        this.sprite = this.game.add.sprite(0, 0, "mushroom");
        this.sprite.anchor.setTo(0.1, 0.1);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update () {
        if (this.cursors.left.isDown)
        {
            this.sprite.x -= 1;
        }
        else if (this.cursors.right.isDown)
        {
            this.sprite.x += 1;
        }
    }
}
