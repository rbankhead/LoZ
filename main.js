var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/link.png");
ASSET_MANAGER.queueDownload("./sprites/overworld.png");

ASSET_MANAGER.downloadAll(function () {
	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	let canvas = document.getElementById('gameWorld');
	let ctx = canvas.getContext('2d');
	PARAMS.CANVAS_WIDTH = canvas.width;

	gameEngine.init(ctx);

	gameEngine.addEntity(new SceneManager(gameEngine));

	gameEngine.start();
});
