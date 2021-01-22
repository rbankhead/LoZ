class Overworld{
    constructor(game, x, y){
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/overworld.png");
        this.width = 256;
        this.height = 176;

    }
    update(){

    }
    draw(ctx){
        ctx.drawImage(this.spritesheet,
            this.x, this.y,// + frame * (this.height + this.framePadding), //source from sheet
            this.width, this.height,
            0, 120,
            this.width * PARAMS.SCALE,
            this.height * PARAMS.SCALE);

    }
}