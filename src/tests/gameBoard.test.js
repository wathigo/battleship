import gameBoard from '../factories/gameBoard';
import newShip from '../factories/ship';


// testing table
test('it should return an array with ten arrays inside', () => {
  const gBoard = gameBoard();
  expect(gBoard.table.length).toBe(10);
});

test('it should return an array that contains arrays of length 10 inside', () => {
  const gBoard = gameBoard();
  for (let i = 0; i < 10; i += 1) {
    expect(gBoard.table[i].length).toBe(10);
  }
});

// testing method placeShip
test('it should be able to place ships within an array on the board horizontally', () => {
  const randomShip = newShip(4);
  const gBoard = gameBoard();
  gBoard.placeShip(randomShip, [[0, 0], [0, 1], [0, 2], [0, 3]]);
  expect(gBoard.table[0][0]).toBe('X');
  expect(gBoard.table[0][1]).toBe('X');
  expect(gBoard.table[0][2]).toBe('X');
  expect(gBoard.table[0][3]).toBe('X');
  expect(gBoard.table[0][4]).toBe('*');
});

test('it should be able to place ships within an array on the board vertically', () => {
  const randomShip = newShip(4);
  const gBoard = gameBoard();
  gBoard.placeShip(randomShip, [[1, 0], [1, 1], [1, 2], [1, 3]]);
  expect(gBoard.table[1][0]).toBe('X');
  expect(gBoard.table[1][1]).toBe('X');
  expect(gBoard.table[1][2]).toBe('X');
  expect(gBoard.table[1][3]).toBe('X');
  expect(gBoard.table[1][4]).toBe('*');
});

test('it should not be able to place a ship where there is a ship already', () => {
  const randomShip = newShip(4);
  const gBoard = gameBoard();

  gBoard.placeShip(randomShip, [[0, 0], [0, 1], [0, 2], [0, 3]]);
  expect(() => {
    gBoard.placeShip(randomShip, [[0, 0], [0, 1], [0, 2], [0, 3]]);
  }).toThrow('Space already occupied');
});

// testing receiveAttack
test('it updates the table with "O" at a position where the ship is hit', () => {
  const randomShip = newShip(4);
  const gBoard = gameBoard();

  gBoard.placeShip(randomShip, [[0, 0], [0, 1], [0, 2], [0, 3]]);
  gBoard.receiveAttack([0, 1], randomShip);
  expect(gBoard.table[0][1]).toBe('O');
});

test('it updates the table with "M" incase of a miss', () => {
  const randomShip = newShip(4);
  const gBoard = gameBoard();

  gBoard.placeShip(randomShip, [[0, 0], [0, 1], [0, 2], [0, 3]]);
  gBoard.receiveAttack([0, 4]);
  expect(gBoard.table[0][4]).toBe('M');
});


// Testing gameStop method

test('it returns false if there are no sunked ships', () => {
  const randomShip = newShip(4);
  const gBoard = gameBoard();

  gBoard.placeShip(randomShip, [[0, 0], [0, 1], [0, 2], [0, 3]]);

  expect(gBoard.gameStop()).toBe(false);
});


test('it returns true if all the ships are sunk', () => {
  const randomShip1 = newShip(1);
  const randomShip2 = newShip(2);
  const gBoard = gameBoard();

  gBoard.placeShip(randomShip1, [[0, 0]]);
  gBoard.placeShip(randomShip2, [[2, 2], [2, 3]]);

  gBoard.receiveAttack([0, 0]);
  gBoard.receiveAttack([2, 2]);
  gBoard.receiveAttack([2, 3]);

  expect(gBoard.gameStop()).toBe(true);
});

test('it returns false if not all the ships are sunk', () => {
  const randomShip1 = newShip(1);
  const randomShip2 = newShip(2);
  const gBoard = gameBoard();

  gBoard.placeShip(randomShip1, [[0, 0]]);
  gBoard.placeShip(randomShip2, [[2, 2], [2, 3]]);
  gBoard.receiveAttack([0, 0]);
  gBoard.receiveAttack([2, 3]);

  expect(gBoard.gameStop()).toBe(false);
});
