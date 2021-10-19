let buttonPaint2 = document.getElementById("submit2");
buttonPaint2.onclick = paintPoint2;
let pointX;
let pointY;
let prevX;
let prevY;

document.getElementById("clear").addEventListener("click", function () {
  location.reload();
});

function paintPoint2(e) {
  for (let i = 1; i < 6; i++) {
    pointX = document.getElementById("pointX" + i);
    pointY = document.getElementById("pointY" + i);

    if (parseFloat(pointX.value) && parseFloat(pointY.value)) {
      ctx.beginPath();
      ctx.arc(pointX.value, pointY.value, 3, 0 * Math.PI, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      if (i == 1) {
        prevX = pointX.value;
        prevY = pointY.value;
      } else if (i >= 2) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineWidth = 1;
        ctx.lineTo(pointX.value, pointY.value);
        ctx.stroke();
        prevX = pointX.value;
        prevY = pointY.value;
      }
    } else {
      alert("Insert a valid number");
    }
  }
}
