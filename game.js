// anonymous function to put all variables local scope by default.
(function(){
  var game  = window.colorQuestGame = window.colorQuestGame || {};

  // Main Game Logic
  game.flow = {
    startOver: function() {
      game.startScene.hide();
      game.summaryScene.hide();
      game.gameoverScene.hide();
      game.gameScene.hide();
      game.startScene.show();
    },
    gameWin: function() {
      game.gameScene.hide();
      game.summaryScene.show();
    },
    gameOver: function() {
      game.startScene.show();
      game.gameScene.hide();
      game.gameoverScene.show();
    },
    nextLevel: function() {
      game.startScene.hide();
      game.summaryScene.hide();
      game.gameScene.show();
    },
    finishLevel: function() {
      game.gameScene.hide();
      game.summaryScene.show();
    },
  }

  // Entry Point
  var init = function() {
    console.log("Welcome to Color Quest Game.");

    game.startScene.handleInput();
    game.summaryScene.handleInput();
    game.gameoverScene.handleInput();
    game.gameScene.handleInput();
  }

  // window.onload = init; // use window.onload (or when DOM ready) if the script is not placed at the end of the HTML file.
  init();


})();


