class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        // Ajouter le fond d'écran
        const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
        background.displayWidth = this.cameras.main.width;
        background.displayHeight = this.cameras.main.height;

        // Ajouter le héros et lui donner des propriétés physiques
        this.hero = this.physics.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'hero');
        this.hero.setCollideWorldBounds(true);
        this.hero.setBounce(0.1);

        // Ajuster la taille du héros
        this.hero.setScale(1.8); // Vous pouvez remplacer 1.2 par la valeur de votre choix

        // Créer des animations pour les mouvements du héros
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
            frameRate: 1,
            repeat: -1,
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('hero', { start: 1, end: 4 }),
            frameRate: 1,
            repeat: -1,
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('hero', { start: 8, end: 11 }),
            frameRate: 1,
            repeat: -1,
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('hero', { start: 9, end: 12 }),
            frameRate: 1,
            repeat: -1,
        });

        // Créer des contrôles pour déplacer le héros
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        const speed = 200;
        let moving = false;

        // Mettre à jour la position du héros en fonction des entrées du clavier
        if (this.cursors.left.isDown) {
            this.hero.setVelocityX(-speed);
            if (this.hero.anims.currentAnim === null || this.hero.anims.currentAnim.key !== 'left') {
                this.hero.anims.play('left', true);
            }
            moving = true;
        } else if (this.cursors.right.isDown) {
            this.hero.setVelocityX(speed);
            if (this.hero.anims.currentAnim === null || this.hero.anims.currentAnim.key !== 'right') {
                this.hero.anims.play('right', true);
            }
            moving = true;
        } else {
            this.hero.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.hero.setVelocityY(-speed);
            if (this.hero.anims.currentAnim === null || this.hero.anims.currentAnim.key !== 'up') {
                this.hero.anims.play('up', true);
            }
            moving = true;
        } else if (this.cursors.down.isDown) {
            this.hero.setVelocityY(speed);
            if (this.hero.anims.currentAnim === null || this.hero.anims.currentAnim.key !== 'down') {
                this.hero.anims.play('down', true);
            }
            moving = true;
        } else {
            this.hero.setVelocityY(0);
        }

        if (!moving && this.hero.anims.currentAnim !== null) {
            this.hero.anims.stop();
            // Réinitialise le frame de l'animation pour éviter le clignotement
            this.hero.setTexture('hero', this.hero.anims.currentAnim.frames[0].index);
        }
    }

}


export default GameScene;
