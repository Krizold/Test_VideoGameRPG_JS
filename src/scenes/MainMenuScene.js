const Phaser = window.Phaser;

class MainMenuScene extends Phaser.Scene {
    constructor() {
        super('MainMenuScene');
    }

    create() {
        // Afficher le menu principal
        
        //const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
                // Ajouter les éléments du menu, comme le texte et les boutons
                const playButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Jouer', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5, 0.5);

                // Ajouter un événement pour démarrer le jeu lorsque le joueur clique sur le bouton "Jouer"
                playButton.setInteractive();
                playButton.on('pointerdown', () => {
                    // Passer à la scène du jeu
                    console.log("GameScene create");
                    this.scene.start('GameScene');
                });
        
                // Ajoutez d'autres éléments du menu ici, comme des boutons pour les options, les crédits, etc.
            }
        }
        
        export default MainMenuScene;
        