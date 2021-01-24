class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.link = new Link(gameEngine, 7.5*PARAMS.BLOCKWIDTH, PARAMS.GUI_OFFSET + 9 * PARAMS.BLOCKWIDTH);

        this.x = 0;
        this.y = 0;


        this.loadLevelOne();

    };

    loadOverworld() {
        let background = new Overworld(this.game, 1800,1240)
        gameEngine.addEntity(background);

        this.link = new Link(gameEngine, 118*PARAMS.SCALE, 118*PARAMS.SCALE);
        gameEngine.addEntity(this.link);

    };

    loadLevelOne(){
        //start room 5,2
        gameEngine.addEntity(new DungeonOneMap(this.game, 515,886));
        gameEngine.addEntity(new InvisibleBlock(this.game, 3*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 3 * PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new InvisibleBlock(this.game, 3*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 5 * PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new InvisibleBlock(this.game, 3*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 7 * PARAMS.BLOCKWIDTH));

        gameEngine.addEntity(new InvisibleBlock(this.game, 6*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 3 * PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new InvisibleBlock(this.game, 6*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 5 * PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new InvisibleBlock(this.game, 6*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 7 * PARAMS.BLOCKWIDTH));

        gameEngine.addEntity(new InvisibleBlock(this.game, 9*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 3 * PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new InvisibleBlock(this.game, 9*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 5 * PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new InvisibleBlock(this.game, 9*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 7 * PARAMS.BLOCKWIDTH));

        gameEngine.addEntity(new InvisibleBlock(this.game, 12*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 3 * PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new InvisibleBlock(this.game, 12*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 5 * PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new InvisibleBlock(this.game, 12*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET + 7 * PARAMS.BLOCKWIDTH));

        gameEngine.addEntity(new Wall(this.game,2*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+2*PARAMS.BLOCKWIDTH,5*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new Wall(this.game,9*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+2*PARAMS.BLOCKWIDTH,5*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new Wall(this.game,9*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+9*PARAMS.BLOCKWIDTH,5*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new Wall(this.game,2*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+9*PARAMS.BLOCKWIDTH,5*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH));

        gameEngine.addEntity(new Wall(this.game,2*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+2*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH,3*PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new Wall(this.game,14*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+2*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH,3*PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new Wall(this.game,2*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+6*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH,3*PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(new Wall(this.game,14*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+6*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH,3*PARAMS.BLOCKWIDTH));
        //end room 5,2
        //start room 5,1
        gameEngine.addEntity(new Wall(this.game, -2*PARAMS.BLOCKWIDTH,PARAMS.GUI_OFFSET+2*PARAMS.BLOCKWIDTH,0*PARAMS.BLOCKWIDTH,3*PARAMS.BLOCKWIDTH));
        gameEngine.addEntity(this.link);
    }

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
    };

    draw(ctx) {

    };
};