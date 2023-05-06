const Phaser = window.Phaser;

class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // Charger les assets nécessaires pour l'écran de démarrage
        this.load.image('loading-bar', 'assets/images/loading-bar.png');
    }

    create() {
        // Initialiser les configurations, les polices, etc.
        // Passer à la scène de préchargement
        this.scene.start('PreloadScene');
    }
}

export default BootScene;
