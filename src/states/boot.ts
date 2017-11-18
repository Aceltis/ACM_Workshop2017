import * as WebFontLoader from 'webfontloader';

export class BootState extends Phaser.State {
  stage: Phaser.Stage;
  fontsReady: boolean;
  fontsLoaded: () => void;

  init () {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 1000;
    this.fontsLoaded = () => { this.fontsReady = true; }
  }

  preload () {
    WebFontLoader.load({
      google: {
        families: ['Nunito']
      },
      active: this.fontsLoaded
    });

    let text = this.add.text(
        this.world.centerX,
        this.world.centerY,
        'loading fonts',
        { font: '16px Arial', fill: '#dddddd', align: 'center' }
    );
    text.anchor.setTo(0.5, 0.5);

    this.load.image('ground', './assets/images/cloud.png');
    this.load.image('background', 'assets/images/sky.png');
  }

  render () {
    if (this.fontsReady) {
      this.game.state.start('Splash');
    }
  }
}
