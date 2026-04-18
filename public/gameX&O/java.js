let box = document.querySelectorAll(".box")
let AI = document.querySelector(".AI")
let oneVone = document.querySelector(".oneVone")
let mode = document.querySelector(".mode");
let main = document.querySelector(".main");
let gameOver = false;
let playerTurn = true;

let turn = "X";

let winConditions = [
  [0, 1, 2], // الصف الأول
  [3, 4, 5], // الصف الثاني
  [6, 7, 8], // الصف الثالث
  [0, 3, 6], // العمود الأول
  [1, 4, 7], // العمود الثاني
  [2, 5, 8], // العمود الثالث
  [0, 4, 8], // القطر \
  [2, 4, 6]  // القطر /
];

function checkDraw() {
  // لو في فوز خلاص نخرج (ما يتنفذش تعادل)
  if (gameOver) return;

  // نتأكد إن كل المربعات متملة
  let allFilled = true;
  box.forEach((cell) => {
    if (cell.children.length === 0) {
      allFilled = false;
    }
  });

  // لو كله متملأ ومفيش فوز
  if (allFilled) {
    let WIN = document.createElement("div");
    let textW = document.createElement("p");
    let btnWIN = document.createElement("button");

    WIN.className = "WIN";
    textW.className = "textWIN";
    btnWIN.className = "OK";

    textW.textContent = "تعادل 🤝";
    btnWIN.textContent = "OK";

    WIN.appendChild(textW);
    WIN.appendChild(btnWIN);
    main.appendChild(WIN);
    gameOver = true;

    btnWIN.onclick = function () {
      WIN.remove();
      playerTurn = true;
      gameOver = false; // ✅ إعادة التهيئة
      box.forEach((cell) => {
        cell.innerHTML = ""; // يفضي كل الخانات
      });
    };
  }
}

mode.textContent = "اختر اي مود"


oneVone.onclick = function () {
  mode.textContent = "X"
oneVone.id ="activ"
    AI.removeAttribute("id")
    gamemod = true

    
    box.forEach((e) => {
e.onclick = function () {
    
    // لو المربع فاضي
    if (e.children.length < 1) {
      let mark = document.createElement("div");
      mark.className = turn; // يحط الكلاس حسب الدور

      e.appendChild(mark);

      // انيميشن بسيط
      setTimeout(() => {
        mark.style.opacity = "1";
        mode.textContent = turn
      }, 0);

      // نبدل الدور بعد كل ضغطة
      turn = turn === "X" ? "O" : "X";
    }

function checkWin(player) {
  for (let condition of winConditions) {
    if (
      box[condition[0]].children[0]?.classList.contains(player) &&
      box[condition[1]].children[0]?.classList.contains(player) &&
      box[condition[2]].children[0]?.classList.contains(player)
    ) {
      let WIN =document.createElement("div");
      let textW =document.createElement("p");
      let btnWIN =document.createElement("button");
      WIN.className ="WIN"
      textW.className = "textWIN"
      btnWIN.className = "OK"
      btnWIN.textContent ="OK"
      textW.textContent = `WIN -- ${player} --` 
      WIN.appendChild(textW)
            WIN.appendChild(btnWIN)
main.appendChild(WIN)
 
btnWIN.onclick = function () {
    WIN.remove()
              gameOver = false;
                  playerTurn = true;

      box.forEach((cell) => {
          cell.innerHTML = ""; 
        });

}

  // يوقف أول ما يلاقي فوز
    }
  }
  
}

// مثال: تحقق إذا X كسب
checkWin("X");
// أو O
checkWin("O");
checkDraw();
  };
});

}








function getRandomEmptyBox() {
  // نجيب كل المربعات الفاضية
const emptyBoxes = [...box].filter(b => b.children.length === 0);

  if (emptyBoxes.length === 0) return null; // مفيش خانات فاضية

  // نجيب خانة عشوائية
  const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
  return emptyBoxes[randomIndex];
}

// مثال: نخلي AI يحط "O" في مكان عشوائي
function aiRandomMove() {
  const targetBox = getRandomEmptyBox();
  if (!targetBox) return; // لو اللوحة مليانة خلاص

  const mark = document.createElement("div");
  mark.className = "O";
  mark.style.opacity = "0";
  targetBox.appendChild(mark);

  setTimeout(() => {
    mark.style.opacity = "1";
  }, 0);
}


AI.onclick = function () {
  

  mode.textContent = "X";
  AI.id = "activ";
  oneVone.removeAttribute("id");
box.forEach((e)=>{
    e.onclick = function () {
       if (!playerTurn) return;
         if (e.children.length < 1) {
      let mark = document.createElement("div");
      mark.className = turn; // يحط الكلاس حسب الدور

      e.appendChild(mark);

      // انيميشن بسيط
      setTimeout(() => {
        mark.style.opacity = "1";
        mode.textContent = turn
      }, 0);
     playerTurn = false;
      setTimeout(() => {
        if(gameOver == false){
aiRandomMove()
         checkWin("O");
         checkDraw();
                  playerTurn = true;

      
      
        }else{
            ""
        }
         }, 500);



function checkWin(player) {
  for (let condition of winConditions) {
    if (
      box[condition[0]].children[0]?.classList.contains(player) &&
      box[condition[1]].children[0]?.classList.contains(player) &&
      box[condition[2]].children[0]?.classList.contains(player)
    ) {
        gameOver = true;
      let WIN =document.createElement("div");
      let textW =document.createElement("p");
      let btnWIN =document.createElement("button");
      WIN.className ="WIN"
      textW.className = "textWIN"
      btnWIN.className = "OK"
      btnWIN.textContent ="OK"
      textW.textContent = `WIN -- ${player} --`
      WIN.appendChild(textW)
            WIN.appendChild(btnWIN)
main.appendChild(WIN)
 

btnWIN.onclick = function () {
    WIN.remove()
    gameOver = false;
                      playerTurn = true;

      box.forEach((cell) => {
          cell.innerHTML = ""; 
          
        });

}

  // يوقف أول ما يلاقي فوز
    }
  }
  
}

// مثال: تحقق إذا X كسب
checkWin("X");
checkDraw();
// أو O



      // نبدل الدور بعد كل ضغطة
      
    }
    }
})
}
