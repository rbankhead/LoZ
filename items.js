class Sword{
    constructor(game,x,y, swordOffsetX, swordOffsetY){
        Object.assign(this, {game, x, y, swordOffsetX, swordOffsetY});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/link.png");
        this.game.sword = this;
        this.width = this.game.link.facing === "left" || this.game.link.facing === "right" ? 13 : 7.5;
        this.height = this.game.link.facing === "left" || this.game.link.facing === "right" ? 7.5 : 13;
        //this.BB = new BoundingBox(this.x-1, this.y - (this.game.link.facing === "left" || this.game.link.facing ? 6 : 1), this.width, this.height);
        this.BB = new BoundingBox(this.game.link.x+this.swordOffsetX* PARAMS.SCALE, this.game.link.y+this.swordOffsetY* PARAMS.SCALE - (this.game.link.facing === "left" || this.game.link.facing === "right" ? 6 : 0), this.width*PARAMS.SCALE, this.height*PARAMS.SCALE);


    }
    update(){
        if (this.game.link.state !== "attacking") this.removeFromWorld = true;
        this.BB = new BoundingBox(this.game.link.x+this.swordOffsetX* PARAMS.SCALE, this.game.link.y+this.swordOffsetY* PARAMS.SCALE - ((this.game.link.facing === "left" || this.game.link.facing === "right") ? 6 : 0), this.width*PARAMS.SCALE, this.height*PARAMS.SCALE);

    }
    draw(ctx){
        ctx.drawImage(this.spritesheet,
            this.x, this.y,//where its found on the spritesheet
            this.width, this.height,
            this.game.link.x+this.swordOffsetX* PARAMS.SCALE, this.game.link.y+this.swordOffsetY* PARAMS.SCALE, //where its drawn on the map
            this.width * PARAMS.SCALE,
            this.height * PARAMS.SCALE);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }

    }
}

class Key {
    constructor(game, x, y) {
    }

    update() {

    }

    draw(ctx) {

    }
}
class Bow {
    constructor(game, x, y) {
    }

    update() {

    }

    draw(ctx) {

    }
}
class Triforce {
    constructor(game, x, y) {
    }

    update() {

    }

    draw(ctx) {

    }
}
class HeartContainer {
    constructor(game, x, y) {
    }

    update() {

    }

    draw(ctx) {

    }
}
class Map {
    constructor(game, x, y) {
    }

    update() {

    }

    draw(ctx) {

    }
}
class Compass {
    constructor(game, x, y) {
    }

    update() {

    }

    draw(ctx) {

    }
}
class Boomerang {
    constructor(game, x, y) {
    }

    update() {

    }

    draw(ctx) {

    }
}