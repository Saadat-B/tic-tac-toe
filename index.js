(function () {
  const game = {
    gameBoard: new Array(9),
    state: true,
    input: undefined,

    init: function () {
      this.cacheDom();
      this.bindEvents();
    },

    cacheDom: function () {
      this.grid = document.querySelectorAll(".grid");
      // this.grid1 = document.querySelector("#grid-1");
      // this.grid2 = document.querySelector("#grid-2");
      // this.grid3 = document.querySelector("#grid-3");
      // this.grid4 = document.querySelector("#grid-4");
      // this.grid5 = document.querySelector("#grid-5");
      // this.grid6 = document.querySelector("#grid-6");
      // this.grid7 = document.querySelector("#grid-7");
      // this.grid8 = document.querySelector("#grid-8");
      // this.grid9 = document.querySelector("#grid-9");
    },

    bindEvents: function () {
      this.grid.forEach((box) => box.addEventListener("click", this.print));
    },
    print: function (e) {
      // Here 'this' refers to the event.target and not the 'game' object
      // if the target has text then this function will not work
      // if the taget has no text then X or O will be inserted as text
      if (this.innerText === "") {
        if (game.state) {
          game.input = "X";
          game.state = false;
          this.innerText = game.input;
          let index = this.dataset.pos;
          game.gameBoard[index] = game.input;
        } else {
          game.input = "O";
          game.state = true;
          this.innerText = game.input;
          let index = this.dataset.pos;
          game.gameBoard[index] = game.input;
        }
      }
    },
  };

  game.init();
})();
