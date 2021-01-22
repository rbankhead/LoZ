class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;

        this.x = 0;
        this.y = 0;

        this.loadOverworld();
    };

    clearEntities() {
        this.game.entities = [this];
    };

    loadOverworld() {
        let background = new Overworld(this.game, 1800,1240)
        gameEngine.addEntity(background);

        this.link = new Link(gameEngine, 118*PARAMS.SCALE, 118*PARAMS.SCALE);
        gameEngine.addEntity(this.link);

    };

    update() {
        let midpoint = PARAMS.CANVAS_WIDTH/2 - PARAMS.BLOCKWIDTH / 2;

        if (this.x < this.link.x - midpoint) this.x = this.link.x - midpoint;
        console.log(PARAMS.CANVAS_WIDTH)
    };

    draw(ctx) {

    };
};