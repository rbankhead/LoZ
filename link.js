class Link {
    constructor(game, x, y){
        Object.assign(this, {game, x, y});

        this.game.link = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/link.png");

        this.tunic = "green"; //green, blue, red, invincible
        this.facing = "up"; //up, down, left, right
        this.state = "idle"; //idle, walking, attacking, lifting, dying
        this.velocity = {x:0,y:0};

        this.updateBB();

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations(){

        //initialize all arrays
        this.animations["green"] = [];
        this.animations["green"]["up"] = [];
        this.animations["green"]["down"] = [];
        this.animations["green"]["left"] = [];
        this.animations["green"]["right"] = [];
        this.animations["blue"] = [];
        this.animations["blue"]["up"] = [];
        this.animations["blue"]["down"] = [];
        this.animations["blue"]["left"] = [];
        this.animations["blue"]["right"] = [];
        this.animations["red"] = [];
        this.animations["red"]["up"] = [];
        this.animations["red"]["down"] = [];
        this.animations["red"]["left"] = [];
        this.animations["red"]["right"] = [];
        this.animations["invincible"] = [];
        this.animations["invincible"]["up"] = [];
        this.animations["invincible"]["down"] = [];
        this.animations["invincible"]["left"] = [];
        this.animations["invincible"]["right"] = [];

        //adding animations
        this.animations["green"]["up"]["idle"] = new Animator(this.spritesheet, 60,0,16,16,1,1,14,false,true);
        this.animations["green"]["down"]["idle"] = new Animator(this.spritesheet, 0,0,16,16,1,.2,14,false,true);
        this.animations["green"]["left"]["idle"] = new Animator(this.spritesheet, 30,0,16,16,1,1,14,false,true);
        this.animations["green"]["right"]["idle"] = new Animator(this.spritesheet, 90,0,16,16,1,1,14,false,true);

        this.animations["green"]["up"]["walking"] = new Animator(this.spritesheet, 60,0,16,16,2,.15,14,false,true);
        this.animations["green"]["down"]["walking"] = new Animator(this.spritesheet, 0,0,16,16,2,.15,14,false,true);
        this.animations["green"]["left"]["walking"] = new Animator(this.spritesheet, 30,0,16,16,2,.15,14,false,true);
        this.animations["green"]["right"]["walking"] = new Animator(this.spritesheet, 90,0,16,16,2,.15,14,false,true);

        this.animations["green"]["up"]["attacking"] = new Animator(this.spritesheet, 60,60,16,16,1,.5,14,false,true);
        this.animations["green"]["down"]["attacking"] = new Animator(this.spritesheet, 0,60,16,17,1,.5,14,false,true);
        this.animations["green"]["left"]["attacking"] = new Animator(this.spritesheet, 35,90,16,16,1,.5,14,false,true);
        this.animations["green"]["right"]["attacking"] = new Animator(this.spritesheet, 84,90,16,16,1,.5,14,false,true);

    }

    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y+1, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    }

    update() {

        //player controls
        if (!this.game.right && !this.game.left && !this.game.up && !this.game.down) {
            this.state = "idle";
            this.velocity.x = 0;
            this.velocity.y = 0;
        }
        if (this.game.click) {
            this.state = "attacking";
            this.velocity.x = 0;
            this.velocity.y = 0;
            switch (this.facing) {
                case "left":
                    this.game.addEntity(new Sword(this.game, 24, 97, -11, 7));
                    this.game.dungeon.x--;
                    this.game.camera.x-=1.5;
                    break;
                case "right":
                    this.game.addEntity(new Sword(this.game, 100, 97, 16, 7));
                    break;
                case "up":
                    this.game.addEntity(new Sword(this.game, 63, 83, 4, -10));
                    break;
                case "down":
                    this.game.addEntity(new Sword(this.game, 5, 99, 4, 15));
                    break;
            }
        } else if (this.game.right) {
            this.state = "walking";
            this.facing = "right";
            this.velocity.x = 4;
            this.velocity.y = 0;
        } else if (this.game.left) {
            this.state = "walking";
            this.facing = "left";
            this.velocity.x = -4;
            this.velocity.y = 0;
        } else if (this.game.up) {
            this.state = "walking";
            this.facing = "up";
            this.velocity.y = -4;
            this.velocity.x = 0;
        } else if (this.game.down) {
            this.state = "walking";
            this.facing = "down";
            this.velocity.y = 4;
            this.velocity.x = 0;
        }
        //after any movement, update bounding box

        //after updating bounding box, check for collisions

        this.updateBB();
        //collision
        let that = this;
        this.game.entities.forEach(function(entity){
            if (entity.BB && that.BB.collide(entity.BB)){
                if(that.velocity.y != 0){
                    if ((entity instanceof Wall || entity instanceof InvisibleBlock)
                        && (that.lastBB.bottom) <= entity.BB.top){
                        that.y = entity.BB.top;// - PARAMS.BLOCKWIDTH;
                        that.velocity.y = 0;
                    } else if ((entity instanceof Wall || entity instanceof InvisibleBlock)
                        && (that.lastBB.top) <= entity.BB.bottom){
                        that.y = entity.BB.bottom;// + PARAMS.BLOCKWIDTH;
                        that.velocity.y = 0;
                    }

                }
            }

        });
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        //screen transitions:
        //when link collides with a screen change BB
        //check which direction the screen should move
        //left = -x
        //right = +x
        //up = -y
        //down = +y
        //clear all entites except link, load new entities
        //OR... we load all the entites at once initially
        //then use a scroller setup like mario.. just doesnt trigger scrolling until certain BB is hit


    }

        draw(ctx){
            this.animations[this.tunic][this.facing][this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE);
            if (PARAMS.DEBUG) {
                ctx.strokeStyle = 'Red';
                ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
            }
        }
}

