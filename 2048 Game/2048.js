var maingrid =  [[], [], [], []];
var grid = document.getElementById('grid');
var copyofgrid = [[],[],[],[]];
var copyofgridval = [[],[],[],[]];
var copyofgridhol = [[],[],[],[]];
var copyofgridel = [[],[],[],[]];
var endgrid = [[],[],[],[]];
var newx = 0;
var newy = 0;
var score = 0;
var checkdone = 0;
var endgame = 0;
var init = 0;
var count = 0;

function scoreKeeper(newnumber){
  if (newnumber > score){
    document.getElementById("score").innerHTML = "Score: " + newnumber;
    score = newnumber;
  }
}

function cell(row,col){
  this.value = 0;
  this.holder = 0;
  this.el;
}
function createCells() {
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++) {
      maingrid[i][j] = new cell(i, j);

  }
}
}
function addNumber(){
  var addedTile = false;
  while (!addedTile){
    var x = Math.floor(Math.random() * 3.4);
    var y = Math.floor(Math.random() * 3.4);
    newx = y;
    newy = x;
if (maingrid[x][y].value === 0){
var number = Math.floor(Math.random() * 2.1);
  if (number >= 1){
  maingrid[x][y].value = 4;
} else if (number < 1){
  maingrid[x][y].value = 2;
      }
addedTile = true;
break;
    }
    }
}

function createElements(){
  for(var row = 0; row < 4; row++) {
    for(var col = 0; col < 4; col++) {
      createEl(row,col);
    }
  }
}
function createEl(row,col){
  var value = maingrid[row][col].value;
  if (value !== 0){
    var newcell = document.createElement('div');
    var newp = document.createElement('p');
    grid.appendChild(newcell);

  function createRandomID() {
      return 'id_' + Math.floor(Math.random() * 99999999999999999);
  }

    var idofcell = createRandomID();
    var idofnewp = createRandomID();
    newcell.setAttribute("id", idofcell);
    var getidofcell = document.getElementById(idofcell);
    newcell.setAttribute("class", "cell");
    maingrid[row][col].el = idofcell;

    getidofcell.appendChild(newp);
    newp.setAttribute("id", idofnewp);



    getidofcell.style.position = 'absolute';
    getidofcell.style.top = row  * 125 + 5 + 'px';
    getidofcell.style.left = col  * 125 + 5 + 'px';
    getidofcell.style.height = '119px';
    getidofcell.style.width = '119px';

    recolorCells(value,idofcell,idofnewp);
  }
  }
function recolorCells(cell,id){
    switch (cell){
      case 0:
        document.getElementById(id).style.background = 'transparent';
        document.getElementById(id).style.width = '0px';
        document.getElementById(id).style.height = '0px';
        break;
      case 2:
        document.getElementById(id).style.backgroundColor = '#ff8080';
        document.getElementById(id).style.backgroundImage = 'url("sky/2.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(2);
        break;
      case 4:
        document.getElementById(id).style.background = '#ffcc80';
        document.getElementById(id).style.backgroundImage = 'url("sky/4.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(4);
        break;
      case 8:
        document.getElementById(id).style.background = '#ffff80';
        document.getElementById(id).style.backgroundImage = 'url("sky/8.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(8);
        break;
      case 16:
        document.getElementById(id).style.background = '#A6D9FE';
        document.getElementById(id).style.backgroundImage = 'url("sky/16.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(16);
        break;
      case 32:
        document.getElementById(id).style.background = '#9fdf9f';
        document.getElementById(id).style.backgroundImage = 'url("sky/32.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(32);
        break;
      case 64:
        document.getElementById(id).style.background = '#80bfff';
        document.getElementById(id).style.backgroundImage = 'url("sky/64.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(64);
        break;
      case 128:
        document.getElementById(id).style.background = '#8080ff';
        document.getElementById(id).style.backgroundImage = 'url("sky/128.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(128);
        break;
      case 256:
        document.getElementById(id).style.background = '#bf80ff';
        document.getElementById(id).style.backgroundImage = 'url("sky/256.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(256);
        break;
      case 512:
        document.getElementById(id).style.background = ' #bf80ff';
        document.getElementById(id).style.backgroundImage = 'url("sky/512.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(512);
        break;
      case 1024:
        document.getElementById(id).style.background = '#ff80bf';
        document.getElementById(id).style.backgroundImage = 'url("sky/1024.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(1024);
        break;
      case 2048:
        document.getElementById(id).style.background = 'black';
        document.getElementById(id).style.backgroundImage = 'url("sky/2048.png")';
        document.getElementById(id).style.backgroundSize = 'cover';
        scoreKeeper(2048);
        break;
      }
  }

function mover(val,start1,start2,el1,el2){
  this.value = val;
  this.start1 = start1;
  this.start2 = start2;
  this.el1 = el1;
  this.el2 = el2;
}
function moveRight(){
  for(var row = 0; row < 4; row++){
    for(var col = 0; col < 4; col++){
      copyofgrid[row][col] = maingrid[row][col].value
     }
   }
  for(var row = 0; row < 4; row++){
    var newarr = [];
    var secarr = [];
    var triarr = [];
    var twocell = 0;
    var twoeq = 0;
    for(var col = 0; col < 4; col++){
      secarr[col] = new mover(0,0,0,0,0);
      maingrid[row][col].holder = col;
    }

    for(var col = 0; col < 4; col++){
      if(maingrid[row][col].value === 0){
        newarr.unshift(maingrid[row][col]);
      }
      if(maingrid[row][col].value !== 0){
        newarr.push(maingrid[row][col]);
        twocell++;
      }
    }

    for(col = 3;col > 0;col--){
      if(newarr[col].value === newarr[col-1].value && newarr[col].value !== 0){
        secarr[col].value = newarr[col].value*2;
        secarr[col].start1 = newarr[col].holder;
        secarr[col].start2 = newarr[col-1].holder;
        secarr[col].el1 = newarr[col].el;
        secarr[col].el2 = newarr[col-1].el;
        newarr[col].value = 0;
        newarr[col-1].value = 0;
        twoeq++;
      }
    }
    for(col = 0;col < 4;col++){
      if(newarr[col].value !== 0){
        secarr[col].value = newarr[col].value;
        secarr[col].start1 = newarr[col].holder;
        secarr[col].start2 = 0;
        secarr[col].el1 = newarr[col].el;
        secarr[col].el2 = 0;
        newarr[col].value = 0;

      }
    }

    for(var col = 0; col < 4; col++){
      if(secarr[col].value === 0){
        triarr.unshift(secarr[col]);
      }
      if(secarr[col].value !== 0){
        triarr.push(secarr[col]);
      }
    }

                    if(count===1){
                      for(var col = 0; col < 4; col++){
                           if(triarr[col].value === copyofgrid[row][col]){

                             init++;

                           }
                        }

                    }

    for(var col = 0; col < 4; col++){
        if(count === 0){
      if (row === 3 && col === 3){
        checkdone = 1;
      }
      if(triarr[col].value === 0){
        animationSide(0,triarr[col].el1,triarr[col].start1,3,row);
        animationSide(0,triarr[col].el2,triarr[col].start2,3,row);
      } else {
        animationSide(triarr[col].value,triarr[col].el1,triarr[col].start1,col,row);
        animationSide(0,triarr[col].el2,triarr[col].start2,col,row);
      }
    }
     }

     for(var col = 0; col < 4; col++){
         if(count === 0){
            maingrid[row][col].value = triarr[col].value;
            maingrid[row][col].holder = 0;
            maingrid[row][col].el = triarr[col].el1;
      }
    }
  }
}
function moveLeft(){
  for(var row = 0; row < 4; row++){
    for(var col = 0; col < 4; col++){
      copyofgrid[row][col] = maingrid[row][col].value
     }
   }
  for(var row = 0; row < 4; row++){
    var newarr = [];
    var secarr = [];
    var triarr = [];
    var twocell = 0;
    var twoeq = 0;
    for(var col = 0; col < 4; col++){
      secarr[col] = new mover(0,0,0,0,0);
      maingrid[row][col].holder = col;
    }
    for(var col = 4; col > 0; col--){
      if(maingrid[row][col-1].value === 0){
        newarr.push(maingrid[row][col-1]);
      }
      if(maingrid[row][col-1].value !== 0){
        newarr.unshift(maingrid[row][col-1]);
        twocell++;
      }
    }

        for(col = 0;col < 3;col++){
          if(newarr[col].value === newarr[col+1].value && newarr[col].value !== 0){
            secarr[col].value = newarr[col].value*2;
            secarr[col].start1 = newarr[col].holder;
            secarr[col].start2 = newarr[col+1].holder;
            secarr[col].el1 = newarr[col].el;
            secarr[col].el2 = newarr[col+1].el;
            newarr[col].value = 0;
            newarr[col+1].value = 0;
            twoeq++;
          }
        }
        for(col = 4;col > 0;col--){
          if(newarr[col-1].value !== 0){
            secarr[col-1].value = newarr[col-1].value;
            secarr[col-1].start1 = newarr[col-1].holder;
            secarr[col-1].start2 = 0;
            secarr[col-1].el1 = newarr[col-1].el;
            secarr[col-1].el2 = 0;
            newarr[col-1].value = 0;

          }
        }

        for(var col = 4; col > 0; col--){
          if(secarr[col-1].value === 0){
            triarr.push(secarr[col-1]);
          }
          if(secarr[col-1].value !== 0){
            triarr.unshift(secarr[col-1]);
          }
        }


                if(count===1){
                  for(var col = 0; col < 4; col++){
                       if(triarr[col].value === copyofgrid[row][col]){

                         init++;

                       }

                    }
                }

        for(var col = 4; col > 0; col--){
            if(count === 0){
      if (row === 3 && col-1 === 0){
        checkdone = 1;
      }
      if(triarr[col-1].value === 0){
        animationSide(0,triarr[col-1].el1,triarr[col-1].start1,0,row);
        animationSide(0,triarr[col-1].el2,triarr[col-1].start2,0,row);
      } else if(triarr[col-1].el2 === 0){
        animationSide(triarr[col-1].value,triarr[col-1].el1,triarr[col-1].start1,col-1,row);
        animationSide(0,triarr[col-1].el2,triarr[col-1].start2,col-1,row);
      } else {
        animationSide(0,triarr[col-1].el1,triarr[col-1].start1,col-1,row);
        animationSide(triarr[col-1].value,triarr[col-1].el2,triarr[col-1].start2,col-1,row);
      }
    }
     }

     for(var col = 0; col < 4; col++){
         if(count === 0){
       if(triarr[col].el2 === 0){
           maingrid[row][col].value = triarr[col].value;
           maingrid[row][col].holder = 0;
           maingrid[row][col].el = triarr[col].el1;
       } else {
           maingrid[row][col].value = triarr[col].value;
           maingrid[row][col].holder = 0;
           maingrid[row][col].el = triarr[col].el2;
       }
     }
    }
  }
}
function animationSide(val,ide, startposition, newdist,row){
  var elem = ide;
  var dist = newdist * 125 + 5;
    $('#' + elem).animate({left: dist + 'px'},500,function(){
  recolorCells(val,ide);
  if(checkdone === 1){
addnewCell();
    }
  });
}

function moveUp(){
  for(var row = 0; row < 4; row++){
    for(var col = 0; col < 4; col++){
      copyofgrid[row][col] = maingrid[row][col].value
     }
   }
  for(var col = 0; col < 4; col++){
    var newarr = [];
    var secarr = [];
    var triarr = [];
    var twocell = 0;
    var twoeq = 0;
    for(var row = 0;  row < 4; row++){
      secarr[row] = new mover(0,0,0,0,0);
      maingrid[row][col].holder = row;
    }
    for(var row = 4; row > 0; row--){
      if(maingrid[row-1][col].value === 0){
        newarr.push(maingrid[row-1][col]);
      }
      if(maingrid[row-1][col].value !== 0){
        newarr.unshift(maingrid[row-1][col]);
        twocell++;
      }
    }

        for(row = 0;row < 3;row++){
          if(newarr[row].value === newarr[row+1].value && newarr[row].value !== 0){
            secarr[row].value = newarr[row].value*2;
            secarr[row].start1 = newarr[row].holder;
            secarr[row].start2 = newarr[row+1].holder;
            secarr[row].el1 = newarr[row].el;
            secarr[row].el2 = newarr[row+1].el;
            newarr[row].value = 0;
            newarr[row+1].value = 0;
            twoeq++;
          }
        }
        for(row = 4;row > 0;row--){
          if(newarr[row-1].value !== 0){
            secarr[row-1].value = newarr[row-1].value;
            secarr[row-1].start1 = newarr[row-1].holder;
            secarr[row-1].start2 = 0;
            secarr[row-1].el1 = newarr[row-1].el;
            secarr[row-1].el2 = 0;
            newarr[row-1].value = 0;

          }
        }

        for(var row = 4; row > 0; row--){
          if(secarr[row-1].value === 0){
            triarr.push(secarr[row-1]);
          }
          if(secarr[row-1].value !== 0){
            triarr.unshift(secarr[row-1]);
          }
        }

        if(count===1){
          for(var row = 0; row < 4; row++){
               if(triarr[row].value === copyofgrid[row][col]){

                 init++;

               }

            }
        }

    for(var row = 4; row > 0; row--){
        if(count === 0){
      if (row === 3 && col-1 === 0){
        checkdone = 1;
      }
      if(triarr[row-1].value === 0){
        animationVertical(0,triarr[row-1].el1,triarr[row-1].start1,0,col);
        animationVertical(0,triarr[row-1].el2,triarr[row-1].start2,0,col);
      } else if(triarr[row-1].el2 === 0){
        animationVertical(triarr[row-1].value,triarr[row-1].el1,triarr[row-1].start1,row-1,col);
        animationVertical(0,triarr[row-1].el2,triarr[row-1].start2,row-1,col);
      } else {
        animationVertical(0,triarr[row-1].el1,triarr[row-1].start1,row-1,col);
        animationVertical(triarr[row-1].value,triarr[row-1].el2,triarr[row-1].start2,row-1,col);
      }
    }
     }

     for(var row = 0; row < 4; row++){
          if(count === 0){
       if(triarr[row].el2 === 0){
           maingrid[row][col].value = triarr[row].value;
           maingrid[row][col].holder = 0;
           maingrid[row][col].el = triarr[row].el1;
       } else {
           maingrid[row][col].value = triarr[row].value;
           maingrid[row][col].holder = 0;
           maingrid[row][col].el = triarr[row].el2;
       }
     }
    }
}}
function moveDown(){
  for(var row = 0; row < 4; row++){
    for(var col = 0; col < 4; col++){
      copyofgrid[row][col] = maingrid[row][col].value
     }
   }
  for(var col = 0; col < 4; col++){
    var newarr = [];
    var secarr = [];
    var triarr = [];
    var twocell = 0;
    var twoeq = 0;
    for(var row = 0; row < 4; row++){
      secarr[row] = new mover(0,0,0,0,0);
      maingrid[row][col].holder = row;
    }

    for(var row = 0; row < 4; row++){
      if(maingrid[row][col].value === 0){
        newarr.unshift(maingrid[row][col]);
      }
      if(maingrid[row][col].value !== 0){
        newarr.push(maingrid[row][col]);
        twocell++;
      }
    }

    for(row = 3;row > 0;row--){
      if(newarr[row].value === newarr[row-1].value && newarr[row].value !== 0){
        secarr[row].value = newarr[row].value*2;
        secarr[row].start1 = newarr[row].holder;
        secarr[row].start2 = newarr[row-1].holder;
        secarr[row].el1 = newarr[row].el;
        secarr[row].el2 = newarr[row-1].el;
        newarr[row].value = 0;
        newarr[row-1].value = 0;
        twoeq++;
      }
    }
    for(row = 0;row < 4;row++){
      if(newarr[row].value !== 0){
        secarr[row].value = newarr[row].value;
        secarr[row].start1 = newarr[row].holder;
        secarr[row].start2 = 0;
        secarr[row].el1 = newarr[row].el;
        secarr[row].el2 = 0;
        newarr[row].value = 0;

      }
    }

    for(var row = 0; row < 4; row++){
      if(secarr[row].value === 0){
        triarr.unshift(secarr[row]);
      }
      if(secarr[row].value !== 0){
        triarr.push(secarr[row]);
      }
    }
if(count===1){
  for(var row = 0; row < 4; row++){
       if(triarr[row].value === copyofgrid[row][col]){

         init++;
       }

    }
}

    for(var row = 0; row < 4; row++){
      if(count === 0){
        if (row === 3 && col === 3){
          checkdone = 1;
        }
        if(triarr[row].value === 0){
          animationVertical(0,triarr[row].el1,triarr[row].start1,3,col);
          animationVertical(0,triarr[row].el2,triarr[row].start2,3,col);
        } else {
          animationVertical(triarr[row].value,triarr[row].el1,triarr[row].start1,row,col);
          animationVertical(0,triarr[row].el2,triarr[row].start2,row,col);
        }
      }
     }

     for(var row = 0; row < 4; row++){
      if(count === 0){
        maingrid[row][col].value = triarr[row].value;
        maingrid[row][col].holder = 0;
        maingrid[row][col].el = triarr[row].el1;
      }

      }
  }
}
function animationVertical(val,ide, startposition, newdist, col){
  var elem = ide;
  var dist = newdist * 125 + 5;
    $('#' + elem).animate({top: dist + 'px'},500,function(){
  recolorCells(val,ide);
  if(checkdone === 1){
  addnewCell();
    }
  });
}
var count2 = 0;

function addnewCell(){
  var i = 0;
  for(var row = 0; row < 4; row++){
    for(var col = 0; col < 4; col++){
      if(maingrid[row][col].value === copyofgrid[row][col]){
        i++;
      }
      if(maingrid[row][col].value !== 0){
        count2++
      }
     }
   }
   if(i < 16 && count2 < 16){
     addNumber();
     createEl(newy,newx);
   }

  if (count2 > 14){
    for(var row = 0; row < 4; row++){
      for(var col = 0; col < 4; col++){
        copyofgridval[row][col] = maingrid[row][col].value;
        copyofgridhol[row][col] = maingrid[row][col].holder;
        copyofgridel[row][col] = maingrid[row][col].el;

       }
     }

count = 1;
moveUp();
for(var row = 0; row < 4; row++){
  for(var col = 0; col < 4; col++){
    maingrid[row][col].value = copyofgridval[row][col];
    maingrid[row][col].holder = copyofgridhol[row][col];
    maingrid[row][col].el = copyofgridel[row][col];

   }
 }
moveDown();
for(var row = 0; row < 4; row++){
  for(var col = 0; col < 4; col++){
    maingrid[row][col].value = copyofgridval[row][col];
    maingrid[row][col].holder = copyofgridhol[row][col];
    maingrid[row][col].el = copyofgridel[row][col];

   }
 }
moveLeft();
for(var row = 0; row < 4; row++){
  for(var col = 0; col < 4; col++){
    maingrid[row][col].value = copyofgridval[row][col];
    maingrid[row][col].holder = copyofgridhol[row][col];
    maingrid[row][col].el = copyofgridel[row][col];

   }
 }
moveRight();
for(var row = 0; row < 4; row++){
  for(var col = 0; col < 4; col++){
    maingrid[row][col].value = copyofgridval[row][col];
    maingrid[row][col].holder = copyofgridhol[row][col];
    maingrid[row][col].el = copyofgridel[row][col];

   }
 }

    if(init === 64){
      document.getElementById("box").style.zIndex = '99999';
      $('#box').animate({opacity: 0.7},500,function(){
        document.getElementById("gameover").innerHTML = "game over";
        document.getElementById("gameover").style.zIndex = '9999999';
        document.getElementById("gameover").style.fontSize = '3em';
    });
    } else {
    init = 0;
  }

  for(var row = 0; row < 4; row++){
    for(var col = 0; col < 4; col++){
      maingrid[row][col].value = copyofgridval[row][col];
      maingrid[row][col].holder = copyofgridhol[row][col];
      maingrid[row][col].el = copyofgridel[row][col];
     }
   }

   }
   count = 0;
   count2 = 0;
   checkdone = 0;
}

function startGame(){
  createCells();
  addNumber();
  addNumber();
  createElements();
}

startGame();

document.onkeydown = function (event) {
    if (event.keyCode === 38 || event.keyCode === 87) {
      moveUp();
    } else if (event.keyCode === 39 || event.keyCode === 68) {
      moveRight();
    } else if (event.keyCode === 40 || event.keyCode === 83) {
      moveDown();
    } else if (event.keyCode === 37 || event.keyCode === 65) {
      moveLeft();
  }
};
