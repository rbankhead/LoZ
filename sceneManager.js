class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;

        this.loadOverworld();
    };

    clearEntities() {
        this.game.entities = [this];
    };

    loadOverworld() {
        this.link = new Link(gameEngine, 0, 0);
        gameEngine.addEntity(this.link);

    };

    update() {
    };

    draw(ctx) {
    };
};