!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n){t.exports=function(t){return{length:t,position:[],hits:0,hit:function(){this.isSunk()||(this.hits+=1)},isSunk:function(){return this.hits>=this.length}}}},function(t,n){t.exports=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=t,e=Array(100).fill().map((function(t,n){return n+1})),r=[],o={1:[0,0],2:[0,1],3:[0,2],4:[0,3],5:[0,4],6:[0,5],7:[0,6],8:[0,7],9:[0,8],10:[0,9],11:[1,0],12:[1,1],13:[1,2],14:[1,3],15:[1,4],16:[1,5],17:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[2,0],22:[2,1],23:[2,2],24:[2,3],25:[2,4],26:[2,5],27:[2,6],28:[2,7],29:[2,8],30:[2,9],31:[3,0],32:[3,1],33:[3,2],34:[3,3],35:[3,4],36:[3,5],37:[3,6],38:[3,7],39:[3,8],40:[3,9],41:[4,0],42:[4,1],43:[4,2],44:[4,3],45:[4,4],46:[4,5],47:[4,6],48:[4,7],49:[4,8],50:[4,9],51:[5,0],52:[5,1],53:[5,2],54:[5,3],55:[5,4],56:[5,5],57:[5,6],58:[5,7],59:[5,8],60:[5,9],61:[6,0],62:[6,1],63:[6,2],64:[6,3],65:[6,4],66:[6,5],67:[6,6],68:[6,7],69:[6,8],70:[6,9],71:[7,0],72:[7,1],73:[7,2],74:[7,3],75:[7,4],76:[7,5],77:[7,6],78:[7,7],79:[7,8],80:[7,9],81:[8,0],82:[8,1],83:[8,2],84:[8,3],85:[8,4],86:[8,5],87:[8,6],88:[8,7],89:[8,8],90:[8,9],91:[9,0],92:[9,1],93:[9,2],94:[9,3],95:[9,4],96:[9,5],97:[9,6],98:[9,7],99:[9,8],100:[9,9]},a=function(){Math.round();var t=e[Math.floor(Math.random()*e.length)];return e.splice(e.indexOf(t),1),r.push(t),o[t]};return{aiPlay:a,PosTaken:e,turn:n,movesdone:r,coorMaps:o}}},function(t,n){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{ships:t,table:[["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"],["*","*","*","*","*","*","*","*","*","*"]],placeShip:function(t,n){var e=this,r=n.length-1,o=[n[0][0],n[r][0]],a=[n[0][1],n[r][1]],i=o[1]-o[0],c=a[1]-a[0];if(!(Math.sqrt(Math.pow(i,2)+Math.pow(c,2))===t.length-1))throw Error("Not valid!");n.forEach((function(n){if("*"!==e.table[n[0]][n[1]])throw Error("Space already occupied");e.table[n[0]][n[1]]="X",t.position.push([n[0],n[1]])})),this.ships.push(t)},receiveAttack:function(t){var n=this,e=!1;return this.ships.forEach((function(r){for(var o=0;o<r.position.length;o+=1)if(r.position[o][0]===t[0]&&r.position[o][1]===t[1])return e=!0,r.hit(),void(n.table[t[0]][t[1]]="O")})),!1===e&&(this.table[t[0]][t[1]]="M"),this.table[t[0]][t[1]]},shipsSunk:function(){var t=0;return this.ships.forEach((function(n){!0===n.isSunk()&&(t+=1)})),t},shipsLeft:function(){return this.ships.length-this.shipsSunk()},gameStop:function(){return this.shipsSunk()===this.ships.length}}}},function(t,n,e){"use strict";e.r(n);var r=e(2),o=e.n(r),a=e(0),i=e.n(a),c=e(1),u=e.n(c);function d(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l,s,h,p,f,b,v=(l=function(t){var n=function(t){for(var n=[],e=0;e<10;e+=1){var r=document.createElement("div");r.classList.add("row"),r.setAttribute("id","".concat(t,"-board-row-").concat(e)),n.push(r)}return n}(t);return n.forEach((function(n,e){for(var r=0;r<10;r+=1){var o=document.createElement("div");o.setAttribute("id","".concat(t,"-row-").concat(e,"-").concat(r)),o.dataset.coordinates="".concat(e).concat(r),o.classList.add("box"),n.appendChild(o)}})),n},s=function(t,n){switch(t){case"*":n.style.background="#7bd6e2";break;case"M":n.style.background="blue";break;case"X":n.style.background="black";break;case"O":n.style.background="red";break;default:n.style.background="#7bd6e2"}},h=function(t,n){d(document.querySelector("#ai-board").childNodes).forEach((function(t){t.parentNode.replaceChild(t.cloneNode(!0),t)}));var e=document.querySelector(".game-over");document.querySelector("#over").textContent="\n    ".concat(n,"\n    ").concat(t.shipsSunk()," ships taken down!\n  "),e.style.display="table-cell",document.querySelector("#restart").addEventListener("click",(function(){location.reload()}))},p=function(t,n){document.querySelector(".".concat(n,"-info")).textContent="Ships Left: ".concat(t.shipsLeft()," out of ").concat(t.ships.length)},f=function(t,n,e,r){var o=Number(n.dataset.coordinates[0]),a=Number(n.dataset.coordinates[1]),i=t.receiveAttack([o,a]);s(i,n),!0===t.gameStop()&&h(t,"You win the game!"),p(t,"ai-board"),setTimeout((function(){var t=e.aiPlay(),n=t[0],o=t[1],a=r.receiveAttack([n,o]),i=document.getElementById("player-row-".concat(t[0],"-").concat(t[1]));s(a,i),p(r,"player-board"),!0===r.gameStop()&&h(r,"Ooops, you lost!")}),500),n.parentNode.replaceChild(n.cloneNode(),n)},b=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;document.getElementById(n).childNodes.forEach((function(o,a){o.childNodes.forEach((function(o,i){"ai-board"===n?(o.style.background="#7bd6e2",o.addEventListener("click",(function(){return f(t,o,e,r)}))):s(t.table[a-1][i],o)}))}))},{renderBoards:function(){var t=m.initializeBoard1(),n=m.initializeBoard2(),e=u()();l("player").forEach((function(t){document.querySelector("#player-board").appendChild(t)})),l("ai").forEach((function(t){document.querySelector("#ai-board").appendChild(t)})),b(t,"player-board",e),b(n,"ai-board",e,t)}}),m={initializeBoard1:function(){var t=o()(),n=i()(1),e=i()(2),r=i()(3),a=i()(4),c=i()(5);t.placeShip(n,[[0,Math.round(9*Math.random())]]);var u=Math.round(3*Math.random()),d=Math.round(6*Math.random());t.placeShip(e,[[d+1,u],[d+1,u+1]]);var l=Math.round(4*Math.random()),s=Math.round(4*Math.random());t.placeShip(r,[[l+1,s+5],[l+2,s+5],[l+3,s+5]]);var h=Math.round(6*Math.random());t.placeShip(a,[[9,h],[9,h+1],[9,h+2],[9,h+3]]);var p=Math.round(5*Math.random());return t.placeShip(c,[[8,p],[8,p+1],[8,p+2],[8,p+3],[8,p+4]]),t},initializeBoard2:function(){var t=o()(),n=i()(1),e=i()(2),r=i()(3),a=i()(4),c=i()(5),u=Math.round(9*Math.random());t.placeShip(n,[[u,9]]);var d=Math.round(7*Math.random());t.placeShip(e,[[8,d],[8,d+1]]);var l=Math.round(2*Math.random()),s=Math.round(8*Math.random());t.placeShip(r,[[l+3,s],[l+4,s],[l+5,s]]);var h=Math.round(5*Math.random());t.placeShip(a,[[9,h],[9,h+1],[9,h+2],[9,h+3]]);var p=Math.round(4*Math.random()),f=Math.round(2*Math.random());return t.placeShip(c,[[f,p],[f,p+1],[f,p+2],[f,p+3],[f,p+4]]),t},startGame:function(){v.renderBoards()},switchTurns:function(t,n){return t.turn,t.turn,n.turn,{player1:t,player2:n}}};m.startGame()}]);