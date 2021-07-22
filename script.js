/*global let = sudoku */

const game = {
	board: '',
	start(complexity) {
		this.board = sudoku.generate(complexity);
	}
};

game.start('medium');