/*global let = sudoku */

const game = {
	board: '',

	boardElem: document.querySelector('.sudoku__board'),

	createCells() {
		const cells = [];

		for (let i = 0; i < 81; i++) {
			const cell = document.createElement('div');

			cell.className = 'sudoku__cell';

			cells.push(cell);
		}

		this.cells = cells;
		this.boardElem.append(...cells /* = cell[1], cell[2], cell[3],... .cell[n]*/ );

	},

	start(complexity) {
		this.board = sudoku.generate(complexity);
	}

};

game.createCells();
game.start('medium');

console.log(game);