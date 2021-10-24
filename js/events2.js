let buttonPaint2 = document.getElementById("submit2");
buttonPaint2.onclick = paintPoint2;
let pointX;
let pointY;
let prevX;
let prevY;
let errorValidacionInput=0;
document.getElementById("clear").addEventListener("click", function () {
  location.reload();
});


function drawRec(pointX, pointY, i){
  const colors = ['#fa4b2a','#e5989b', '#333d29', '#023047', '#5f0f40']
  let px1, px2, py;
  px1= pointX - 5; 
  px2=pointX + 5;
  py = pointY;
  let width=px2-px1;
console.log(px1 +" " + px2);
  ctx.beginPath();
  ctx.fillStyle=colors[i-1];
  ctx.fillRect(px1, py,width, -py);
return 1;  
}

function paintPoint2(e) {
  for (let i = 1; i < 6; i++) {
    pointX = document.getElementById("pointX" + i);
    pointY = document.getElementById("pointY" + i);

    if (parseFloat(pointX.value) && parseFloat(pointY.value)) {
      ctx.beginPath();
      

      if (i == 1) {
        prevX = pointX.value;
        prevY = - pointY.value;
      } else if (i >= 2) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineWidth = 1;
        ctx.lineTo(pointX.value, -pointY.value);
        ctx.stroke();
        prevX = pointX.value;
        prevY = -pointY.value;
      }

      drawRec(parseFloat(pointX.value),parseFloat(-pointY.value), i);
    } else {
      alert("Insert a valid number");
    }
  }
}
