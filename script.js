/*global let = sudoku */

const game = {
	board: '',
	createCells() {
		const cells = [];

		for (let i = 0; i < 49; i++) {
			const cell = document.createElement('div');

			cell.className = 'sudoku__cell';

			cells.push(cell);
		}

		this.cells = cells;

	},
	start(complexity) {
		this.board = sudoku.generate(complexity);
	}
};

game.createCells();
game.start('medium');

console.log(game);