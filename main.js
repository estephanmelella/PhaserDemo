var game = new Phaser.Game(300, 200, Phaser.AUTO);
game.state.add('state1', demo.state1);
game.state.start('state1');

