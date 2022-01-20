(function () {
  const game = {
    gameBoard: new Array(9),

    init: function () {
      this.cacheDom();
      this.bindEvents();
    },

    cacheDom: function () {
      this.grid = document.querySelectorAll(".grid");
    },

    bindEvents: function () {
      this.grid.forEach((box) => box.addEventListener("click", this.print));
    },
    print: function (e) {
      console.log(e.target);
    },
  };

  game.init();
})();
