class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.AKey = null;
        this.DKey = null;
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenE.png");
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "eye_blue.png");
        my.sprite.hornLeft = this.add.sprite(this.bodyX-60, this.bodyY-70, "monsterParts", "detail_blue_horn_small.png");
        my.sprite.hornLeft.flipX = true;
        my.sprite.hornRight = this.add.sprite(this.bodyX+60, this.bodyY-70, "monsterParts", "detail_blue_horn_small.png");
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouthFangs = this.add.sprite(this.bodyX, this.bodyY+50, "monsterParts", "mouthB.png");
        my.sprite.mouthFangs.visible = false;


        my.sprite.armLeft = this.add.sprite(this.bodyX-80, this.bodyY+100, "monsterParts", "arm_blueA.png");
        my.sprite.armLeft.flipX = true;
        my.sprite.armRight = this.add.sprite(this.bodyX+80, this.bodyY+100, "monsterParts", "arm_blueA.png");

        my.sprite.legLeft = this.add.sprite(this.bodyX-50, this.bodyY+180, "monsterParts", "leg_blueA.png");
        my.sprite.legLeft.flipX = true;
        my.sprite.legRight = this.add.sprite(this.bodyX+50, this.bodyY+180, "monsterParts", "leg_blueA.png");

        this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.SKey.on('down', (key, event) => {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthFangs.visible = false;
        });

        this.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.FKey.on('down', (key, event) => {
            my.sprite.mouthFangs.visible = true;
            my.sprite.mouthSmile.visible = false;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.DKey.isDown) {
            for(let bodyPart in my.sprite) {
                my.sprite[bodyPart].x += 1;
            }
        }

        if(this.AKey.isDown) {
            for(let bodyPart in my.sprite) {
                my.sprite[bodyPart].x -= 1;
            }
        }

       
    }

}