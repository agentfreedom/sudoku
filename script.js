/*global let = sudoku */

const game = {
	board: '',

	boardElem: document.querySelector('.sudoku__board'),

	createCells() {
		const cells = [];

		for (let i = 0; i < 81; i++) {
			const cell = document.createElement('div');

			cell.className = 'sudoku__cell';

			cell.addEventListener('click', this.activateCell.bind(this, i));

			cells.push(cell);
		}

		this.cells = cells;
		this.boardElem.append(...cells /* = cell[1], cell[2], cell[3],... .cell[n]*/ );

		window.addEventListener('keypress', this.fillCell.bind(this));
	},

	activateCell(i) {
		this.activeCell = i;
		this.render();
	},

	fillCell(e) {
		const num = e.key;
		const {
			activeCell,
			board
		} = this;
		const startBoard = board.slice(0, activeCell);
		const endBoard = board.slice(activeCell + 1);

		this.board = startBoard + num + endBoard;
		this.render();
	},

	start(complexity) {
		this.board = sudoku.generate(complexity);

		this.render();
	},

	render() {
		const {
			board,
			activeCell
		} = this;

		this.cells.forEach(function (cell, idx) {
			const text = board[idx];

			if (text === '.') {
				cell.innerText = '';
			} else {
				cell.innerText = text;
			}

			if (activeCell === idx) {
				cell.classList.add('sudoku__cell--active');
			} else {
				cell.classList.remove('sudoku__cell--active');
			}
		});
	}

};

game.createCells();
game.start('medium');

console.log(game);