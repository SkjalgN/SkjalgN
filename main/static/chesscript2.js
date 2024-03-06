//make an object oriented chess game


class ChessPiece {
    constructor(color, type, square, jssquare) {
        this.type = type;
        this.color = color;
        this.square = square;
        this.jssquare = jssquare;
        this.possiblemoves = [];
    }
    getMoves() {
        return this.possiblemoves;
    }
}


class ChessGame {
    constructor() {
        this.chessboard = [
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        ];
        this.activecell = [];
        this.possiblemoves = [];
        this.liste = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.fillChessboard();
        // this.fillChessBoardHTML();
        // this.addEventListeners();
        console.log(this.chessboard);
    }

    fillChessboard(){
        let wp1 = new ChessPiece('white', 'pawn', 'a2', [1,0]);
        let wp2 = new ChessPiece('white', 'pawn', 'b2', [1,1]);
        let wp3 = new ChessPiece('white', 'pawn', 'c2', [1,2]);
        let wp4 = new ChessPiece('white', 'pawn', 'd2', [1,3]);
        let wp5 = new ChessPiece('white', 'pawn', 'e2', [1,4]);
        let wp6 = new ChessPiece('white', 'pawn', 'f2', [1,5]);
        let wp7 = new ChessPiece('white', 'pawn', 'g2', [1,6]);
        let wp8 = new ChessPiece('white', 'pawn', 'h2', [1,7]);
        this.chessboard[1][0] = wp1;
        this.chessboard[1][1] = wp2;
        this.chessboard[1][2] = wp3;
        this.chessboard[1][3] = wp4;
        this.chessboard[1][4] = wp5;
        this.chessboard[1][5] = wp6;
        this.chessboard[1][6] = wp7;
        this.chessboard[1][7] = wp8;
        let bp1 = new ChessPiece('black', 'pawn', 'a7', [6,0]);
        let bp2 = new ChessPiece('black', 'pawn', 'b7', [6,1]);
        let bp3 = new ChessPiece('black', 'pawn', 'c7', [6,2]);
        let bp4 = new ChessPiece('black', 'pawn', 'd7', [6,3]);
        let bp5 = new ChessPiece('black', 'pawn', 'e7', [6,4]);
        let bp6 = new ChessPiece('black', 'pawn', 'f7', [6,5]);
        let bp7 = new ChessPiece('black', 'pawn', 'g7', [6,6]);
        let bp8 = new ChessPiece('black', 'pawn', 'h7', [6,7]);
        this.chessboard[6][0] = bp1;
        this.chessboard[6][1] = bp2;
        this.chessboard[6][2] = bp3;
        this.chessboard[6][3] = bp4;
        this.chessboard[6][4] = bp5;
        this.chessboard[6][5] = bp6;
        this.chessboard[6][6] = bp7;
        this.chessboard[6][7] = bp8;
        let br1 = new ChessPiece('black', 'rook', 'a8', [7,0]);
        let br2 = new ChessPiece('black', 'rook', 'h8', [7,7]);
        this.chessboard[7][0] = br1;
        this.chessboard[7][7] = br2;
        let wr1 = new ChessPiece('white', 'rook', 'a1', [0,0]);
        let wr2 = new ChessPiece('white', 'rook', 'h1', [0,7]);
        this.chessboard[0][0] = wr1;
        this.chessboard[0][7] = wr2;
        let bn1 = new ChessPiece('black', 'knight', 'b8', [7,1]);
        let bn2 = new ChessPiece('black', 'knight', 'g8', [7,6]);
        this.chessboard[7][1] = bn1;
        this.chessboard[7][6] = bn2;
        let wn1 = new ChessPiece('white', 'knight', 'b1', [0,1]);
        let wn2 = new ChessPiece('white', 'knight', 'g1', [0,6]);
        this.chessboard[0][1] = wn1;
        this.chessboard[0][6] = wn2;
        let bb1 = new ChessPiece('black', 'bishop', 'c8', [7,2]);
        let bb2 = new ChessPiece('black', 'bishop', 'f8', [7,5]);
        this.chessboard[7][2] = bb1;
        this.chessboard[7][5] = bb2;
        let wb1 = new ChessPiece('white', 'bishop', 'c1', [0,2]);
        let wb2 = new ChessPiece('white', 'bishop', 'f1', [0,5]);
        this.chessboard[0][2] = wb1;
        this.chessboard[0][5] = wb2;
        let bq = new ChessPiece('black', 'queen', 'd8', [7,3]);
        let wq = new ChessPiece('white', 'queen', 'd1', [0,3]);
        this.chessboard[7][3] = bq;
        this.chessboard[0][3] = wq;
        let bk = new ChessPiece('black', 'king', 'e8', [7,4]);
        let wk = new ChessPiece('white', 'king', 'e1', [0,4]);
        this.chessboard[7][4] = bk;
        this.chessboard[0][4] = wk;
    }

    fillChessBoardHTML() {
        for (let i = 1; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                document.getElementById(this.liste[j - 1] + i).innerHTML = this.chessboard[i - 1][j - 1];
            }
        }
    }
    addEventListeners() {
        for (let i = 1; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                document.getElementById(this.liste[j - 1] + i)
                    .addEventListener("click", () => this.toggleActive(this.liste[j - 1] + i));
            }
        }
    }
    movePiece(startRow, startCol, endRow, endCol) {
        const piece = this.chessboard[startRow][startCol];
        if (this.possiblemoves.includes(this.liste[endCol] + (endRow + 1))) {
            this.chessboard[startRow][startCol] = '';
            this.chessboard[endRow][endCol] = piece;
            this.fillChessBoardHTML();
        }
        else {
            console.log('Invalid move')
        }
    }
    removeActiveAll() {
        for (let i = 1; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                document.getElementById(this.liste[j - 1] + i).classList.remove("active");
                document.getElementById(this.liste[j - 1] + i).classList.remove("active1");
            }
        }
        this.activecell = [];
        this.possiblemoves = [];
    }
    toggleActive(cell) {
        if (this.activecell.length === 0) {
            this.activecell = [this.liste.indexOf(cell[0]), parseInt(cell[1]) - 1];
            document.getElementById(cell).classList.add("active");
            this.possiblemoves = this.getMoves(this.activecell[0], this.activecell[1]);
            for (let i = 0; i < this.possiblemoves.length; i++) {
                document.getElementById(this.possiblemoves[i]).classList.add("active1");
            }
        }
        else {
            this.movePiece(this.activecell[1], this.activecell[0], parseInt(cell[1]) - 1, this.liste.indexOf(cell[0]));
            this.removeActiveAll();
        }
    }

    findPossibleMoves(row, col) {
        let moves = [];
        if (this.chessboard[row,col].type === 'pawn') {
            if (piece.color === 'white') {
                if (row === 1) {
                    if (this.chessboard[row + 1][col] === ' ') {
                        moves.push([row + 1, col]);
                        if (this.chessboard[row + 2][col] === ' ') {
                            moves.push([row + 2, col]);
                        }
                    }
                }
                else {
                    if (this.chessboard[row + 1][col] === ' ') {
                        moves.push([row + 1, col]);
                    }
                }
            }
            else {
                if (row === 6) {
                    if (this.chessboard[row - 1][col] === ' ') {
                        moves.push([row - 1, col]);
                        if (this.chessboard[row - 2][col] === ' ') {
                            moves.push([row - 2, col]);
                        }
                    }
                }
                else {
                    if (this.chessboard[row - 1][col] === ' ') {
                        moves.push([row - 1, col]);
                    }
                }
            }
        }
        return moves;
    }
}

let game = new ChessGame();
