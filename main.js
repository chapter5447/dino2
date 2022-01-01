var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var background = new Image();
background.src = "a.jpg";

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;




var img2 = new Image();
img2.src = 'pan.png';
var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y)
  },
};


var imgi = new Image();
imgi.src = 'cactus.png';

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 220;
    this.width = 30;
    this.height = 30;
  }
  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(imgi, this.x, this.y)
  }
}

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animation;
function ab() {
  animation = requestAnimationFrame(ab);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (timer % 80 === 0) {
    var rnd = Math.floor(Math.random() * 10);

    if(rnd < 5 ){
    var cactus = new Cactus();
    cactus여러개.push(cactus);
    }
  }
  cactus여러개.forEach((a, i, o) => {
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x-=2;

    충돌하나(dino, a);

    a.draw();
  });

  if (점프중 == true) {
    dino.y-=1.5;
    점프timer++;
  }
  if (점프중 == false){
    if(dino.y <200){
    dino.y+=1.5;
    점프timer = 0
    }
  }
  if(점프timer > 120){
    점프중 = false;
  }


  dino.draw();
}

ab();


//충돌확인

function 충돌하나(dino, cactus){
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation)
    alert('죽음')
    location.reload()
    

  }
}






var 점프중 = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    if(dino.y === 200){
    점프중 = true;      
    }
  }
});

function 버튼(){
  if(dino.y === 200)
  점프중 = true;
}





