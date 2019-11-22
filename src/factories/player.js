const player = ((turnV = true) => {
  const turn = turnV;
  const PosTaken = Array(100).fill().map((x, i) => i + 1);
  const movesdone = [];
  const coorMaps = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [0, 3],
    5: [0, 4],
    6: [0, 5],
    7: [0, 6],
    8: [0, 7],
    9: [0, 8],
    10: [0, 9],
    11: [1, 0],
    12: [1, 1],
    13: [1, 2],
    14: [1, 3],
    15: [1, 4],
    16: [1, 5],
    17: [1, 6],
    18: [1, 7],
    19: [1, 8],
    20: [1, 9],
    21: [2, 0],
    22: [2, 1],
    23: [2, 2],
    24: [2, 3],
    25: [2, 4],
    26: [2, 5],
    27: [2, 6],
    28: [2, 7],
    29: [2, 8],
    30: [2, 9],
    31: [3, 0],
    32: [3, 1],
    33: [3, 2],
    34: [3, 3],
    35: [3, 4],
    36: [3, 5],
    37: [3, 6],
    38: [3, 7],
    39: [3, 8],
    40: [3, 9],
    41: [4, 0],
    42: [4, 1],
    43: [4, 2],
    44: [4, 3],
    45: [4, 4],
    46: [4, 5],
    47: [4, 6],
    48: [4, 7],
    49: [4, 8],
    50: [4, 9],
    51: [5, 0],
    52: [5, 1],
    53: [5, 2],
    54: [5, 3],
    55: [5, 4],
    56: [5, 5],
    57: [5, 6],
    58: [5, 7],
    59: [5, 8],
    60: [5, 9],
    61: [6, 0],
    62: [6, 1],
    63: [6, 2],
    64: [6, 3],
    65: [6, 4],
    66: [6, 5],
    67: [6, 6],
    68: [6, 7],
    69: [6, 8],
    70: [6, 9],
    71: [7, 0],
    72: [7, 1],
    73: [7, 2],
    74: [7, 3],
    75: [7, 4],
    76: [7, 5],
    77: [7, 6],
    78: [7, 7],
    79: [7, 8],
    80: [7, 9],
    81: [8, 0],
    82: [8, 1],
    83: [8, 2],
    84: [8, 3],
    85: [8, 4],
    86: [8, 5],
    87: [8, 6],
    88: [8, 7],
    89: [8, 8],
    90: [8, 9],
    91: [9, 0],
    92: [9, 1],
    93: [9, 2],
    94: [9, 3],
    95: [9, 4],
    96: [9, 5],
    97: [9, 6],
    98: [9, 7],
    99: [9, 8],
    100: [9, 9],
  };

  const aiPlay = (moveAi = PosTaken[Math.floor(Math.random() * PosTaken.length)], last = false) => {
    Math.round();
    const randMove = moveAi;
    PosTaken.splice(PosTaken.indexOf(randMove), 1);
    movesdone.push(randMove);
    return coorMaps[randMove];
  };

  return {
    aiPlay, PosTaken, turn, movesdone, coorMaps,
  };
});

module.exports = player;
