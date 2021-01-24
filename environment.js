class InvisibleBlock{
    constructor(game,x,y){
        Object.assign(this, {game, x, y});
        this.BB = new BoundingBox(this.x-this.game.camera.x, this.y-this.game.camera.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);

    }
    update(){
        this.BB = new BoundingBox(this.x-this.game.camera.x, this.y-this.game.camera.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKWIDTH);
    }
    draw(ctx){
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x-this.game.camera.x, this.BB.y-this.game.camera.y, this.BB.width, this.BB.height);
        }
    }
}
class MoveableBlock{
    constructor(game, x, y) {
    }
    update(){

    }
    draw(ctx){

    }
}
class Wall{
    constructor(game,x,y,width,height){
        Object.assign(this, {game,x,y,width,height});
        this.BB = new BoundingBox(this.x-this.game.camera.x,this.y-this.game.camera.y,this.width,this.height);
    }
    update(){
        this.BB = new BoundingBox(this.x-this.game.camera.x,this.y-this.game.camera.y,this.width,this.height);
    }
    draw(ctx){
        if (PARAMS.DEBUG){
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x-this.game.camera.x, this.BB.y-this.game.camera.y, this.BB.width, this.BB.height);
        }
    }
}