export class Character {

    private sprite: Phaser.Sprite;
    private cursors: Phaser.CursorKeys;

    constructor (
        public game: Phaser.Game,
        public physics: Phaser.Physics,
        public x: number,
        public y: number,
        public assetUrl: string
    ) {
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.sprite = this.game.add.sprite(50, 50, "mushroom");
        this.physics.arcade.enable(this.sprite);
        this.sprite.anchor.setTo(0.1, 0.1);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.setSize(64, 64, 0, 0);
        this.sprite.body.velocity.x = 0;

    }

    update () {
        if (this.cursors.left.isDown)
        {
            this.sprite.body.velocity.x -= 20;
        }
        else if (this.cursors.right.isDown)
        {
            this.sprite.body.velocity.x += 20;
        }
    }
}
