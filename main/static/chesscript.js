
// Define the chessboard as a 2D array
let chessboard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];

let activecell = ''
let possiblemoves = []

// make eventlistener for each cell
liste = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
        document.getElementById(liste[j - 1] + i)
            .addEventListener("click", function () { toggleActive(liste[j - 1] + i) });
    }
}

// Fill the chessboard
fillChessBoard();

function fillChessBoard() {
    liste = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            document.getElementById(liste[j - 1] + i).innerHTML = chessboard[i - 1][j - 1];
        }
    }
}

function movePiece(startRow, startCol, endRow, endCol) {
    const piece = chessboard[startRow][startCol];
    if (possiblemoves.includes(liste[endCol] + (endRow + 1))) {
        chessboard[startRow][startCol] = ' ';
        chessboard[endRow][endCol] = piece;
        fillChessBoard();
    }
    else {
        console.log('Invalid move')
    }
}

function removeActiveAll() {
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            document.getElementById(liste[j - 1] + i).classList.remove("active");
            document.getElementById(liste[j - 1] + i).classList.remove("active1");
        }
    }
    activecell = '';
    possiblemoves = [];
}


function toggleActive(cell) {
    if (document.getElementById(cell).innerHTML != ' ' || activecell != '') {
        if (document.getElementById(cell).classList.contains("active")) {
            removeActiveAll();

        } else {
            if (activecell != '') {
                movePiece(activecell[1] - 1, liste.indexOf(activecell[0]), cell[1] - 1, liste.indexOf(cell[0]));
                removeActiveAll();
            }
            else {
                document.getElementById(cell).classList.add("active");
                activecell = cell;
                addPossibleMoves();
            }
        }
    }
}

function showPossibleMoves() {
    for (let i = 0; i < possiblemoves.length; i++) {
        document.getElementById(possiblemoves[i]).classList.add("active1");
    }
}

function addPossibleMoves() {
    if (activecell != '') {
        if (document.getElementById(activecell).innerHTML == 'P') {
            if (document.getElementById(activecell[0] + (parseInt(activecell[1]) + 1)).innerHTML == ' ') {
                possiblemoves.push(activecell[0] + (parseInt(activecell[1]) + 1));
                if (parseInt(activecell[1]) == 2) {
                    possiblemoves.push(activecell[0] + (parseInt(activecell[1]) + 2));
                }
            }
            if (activecell[0] != 'a') {
                if (document.getElementById(liste[liste.indexOf(activecell[0]) - 1] + (parseInt(activecell[1]) + 1)).innerHTML != ' ') {
                    possiblemoves.push(liste[liste.indexOf(activecell[0]) - 1] + (parseInt(activecell[1]) + 1));
                }
            }
            if (activecell[0] != 'h') {
                if (document.getElementById(liste[liste.indexOf(activecell[0]) + 1] + (parseInt(activecell[1]) + 1)).innerHTML != ' ') {
                    possiblemoves.push(liste[liste.indexOf(activecell[0]) + 1] + (parseInt(activecell[1]) + 1));
                }
            }
        }
        if (document.getElementById(activecell).innerHTML == 'p') {
            if (document.getElementById(activecell[0] + (parseInt(activecell[1]) - 1)).innerHTML == ' ') {
                possiblemoves.push(activecell[0] + (parseInt(activecell[1]) - 1));
                if (parseInt(activecell[1]) == 7) {
                    possiblemoves.push(activecell[0] + (parseInt(activecell[1]) - 2));
                }
            }
            if (activecell[0] != 'a') {
                if (document.getElementById(liste[liste.indexOf(activecell[0]) - 1] + (parseInt(activecell[1]) - 1)).innerHTML != ' ') {
                    possiblemoves.push(liste[liste.indexOf(activecell[0]) - 1] + (parseInt(activecell[1]) - 1));
                }
            }
            if (activecell[0] != 'h') {
                if (document.getElementById(liste[liste.indexOf(activecell[0]) + 1] + (parseInt(activecell[1]) - 1)).innerHTML != ' ') {
                    possiblemoves.push(liste[liste.indexOf(activecell[0]) + 1] + (parseInt(activecell[1]) - 1));
                }
            }
        }
        if (document.getElementById(activecell).innerHTML == 'R') {
            // Check for possible moves to the right
          
            for (let i = activecell[0]; i < 9; i++) {
                if (document.getElementById(activecell[0] + i).innerHTML == ' ') {
                    possiblemoves.push(activecell[0] + i);
                }
                else if (document.getElementById(activecell[0] + i).classList.contains('black')) {
                    possiblemoves.push(activecell[0] + i);
                    break;
                }
                else if(activecell[1] == i){
                    continue;
                }
                else {
                    console.log('break')
                    break;
                }
            }
            // Check for possible moves to the left
            for (let i = activecell[0]; i < 9; i++) {
                if (document.getElementById(liste[i - 1] + activecell[1]).innerHTML == ' ') {
                    possiblemoves.push(liste[i - 1] + activecell[1]);
                }
                else if (document.getElementById(liste[i - 1] + activecell[1]).classList.contains('black')) {
                    possiblemoves.push(liste[i - 1] + activecell[1]);
                    break;
                }
                else if(activecell[0] == liste[i - 1]){
                    continue;
                }
                else {
                    break;
                }
            }
            // Check for possible moves upwards
            for (let i = activecell[1]; i < 9; i++) {
                if (document.getElementById(activecell[0] + i).innerHTML == ' ') {
                    possiblemoves.push(activecell[0] + i);
                }
                else if (document.getElementById(activecell[0] + i).classList.contains('black')) {
                    possiblemoves.push(activecell[0] + i);
                    break;
                }
                else if(activecell[1] == i){
                    continue;
                }
                else {
                    break;
                }
            }
            // Check for possible moves downwards
            for (let i = 1; i < 9; i++) {
                if (document.getElementById(liste[i - 1] + activecell[1]).innerHTML == ' ') {
                    possiblemoves.push(liste[i - 1] + activecell[1]);
                }
                else if (document.getElementById(liste[i - 1] + activecell[1]).classList.contains('black')) {
                    possiblemoves.push(liste[i - 1] + activecell[1]);
                    break;
                }
                else if(activecell[0] == liste[i - 1]){
                    continue;
                }
                else {
                    break;
                }
            }
        }
    }
    showPossibleMoves();
    console.log(activecell)
}



function resetBoard() {
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            document.getElementById(liste[j - 1] + i).classList.remove("active");
            document.getElementById(liste[j - 1] + i).classList.remove("active1");
        }
    }
    chessboard = [
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ];
    activecell = '';
    fillChessBoard();
    console.log('Board reset')
}


