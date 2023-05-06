const Phaser = window.Phaser;

class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScene');
    }

    preload() {
        // Créer et afficher la barre de chargement
        const loadingBar = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'loading-bar');
        this.load.on('progress', (value) => {
            loadingBar.setScale(value, 1);
        });

        // Charger les assets nécessaires pour le jeu
        // Par exemple, les images, les spritesheets, les fichiers audio, etc.
        this.load.image('background', 'assets/images/background.png');
        this.load.image('cup', 'assets/cup.png');

        // Ajouter les autres assets ici
        this.load.spritesheet('hero', 'assets/images/hero.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        // Passer à la scène du menu principal
        this.scene.start('MainMenuScene');
    }
}

export default PreloadScene;
