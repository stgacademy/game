(function(){
  var game = window.colorQuestGame = window.colorQuestGame || {};

  // Scenes
  var scene = {
    node: document.querySelector('.scene'),
    show: function() {
      this.node.classList.remove('out');
      this.node.classList.add('in');
    },
    hide: function() {
      this.node.classList.remove('in');
      this.node.classList.add('out');
    }
  };

  // Game Scene
  var gameScene = game.gameScene = Object.create(scene);
  gameScene.node = document.getElementById('game-scene');
  gameScene.handleInput = function() {    
    document.getElementById('finish-btn').onclick = function(){
      game.flow.finishLevel();
    };
    document.getElementById('gameover-btn').onclick = function(){
      game.flow.gameOver();
    };
  };
  gameScene.hide = function() {
    // invoke the show function inside the prototype chain. (aka. super.hide())
    Object.getPrototypeOf(this).hide.call(this);

    /* extra */
    // add the class for the out effect
    // var questView = document.getElementById('quest');
    // questView.classList.add('out');
    /* end extra */
  }

  // Start Scene
  var startScene = game.startScene = Object.create(scene);
  startScene.node = document.getElementById('start-scene');
  startScene.handleInput = function() {    
    document.getElementById('start-btn').onclick = function(){
      game.flow.nextLevel();
    };
  };

  // Summary Scene
  var summaryScene = game.summaryScene = Object.create(scene);
  summaryScene.node = document.getElementById('summary-scene');
  summaryScene.handleInput = function() {    
    document.getElementById('next-level-button').onclick = function() {
      game.flow.nextLevel();
    };
  };

  // Gameover Scene
  var gameoverScene = game.gameoverScene = Object.create(scene);
  gameoverScene.node = document.getElementById('gameover-scene');
  gameoverScene.handleInput = function() {
    var scene = this;
    document.getElementById('back-to-menu-button').onclick = function() {
      game.flow.startOver();
    };
  };
})();
