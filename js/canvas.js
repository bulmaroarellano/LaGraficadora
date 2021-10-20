var canvas;
var contenedor;
var ctx;
window.onload = function() {
    var mouse = false;
     canvas = document.getElementById("canvas1");
      contenedor = document.getElementById("contenedorCanvas");
    var cuadritos = [];
    var sizeCuadro = { ancho:10, alto: 10 };
    var color = "grey";
  
    if (canvas && canvas.getContext) {
      ctx = canvas.getContext("2d");
      if (ctx) {
         function dibujaGrid(disX, disY, anchoLinea, color) {
           
          ctx.strokeStyle = color;
          ctx.lineWidth = anchoLinea;
          var columnas = [];
          var filas = [];
          for (i = disX; i < canvas.width; i += disX) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();

            if(i==100){
              console.log("ooooli" + (-i))
              ctx.lineWidth =5;
              ctx.strokeStyle = "black";
              ctx.beginPath();
              ctx.moveTo(i, 0);
              ctx.lineTo(i, canvas.height);
              ctx.lineWidth = 0.5;
            }
            columnas.push(i);

            
          }
          for (i = disY; i < canvas.height; i += disY) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(ctx.canvas.width, i);
            ctx.stroke();
            filas.push(i);
          }
          columnas.push(0);
          filas.push(0);
          for (x = 0; x < columnas.length; x++) {
            for (y = 0; y < filas.length; y++) {
              cuadritos.push([columnas[x], filas[y], disX, disY]);
            }
          }
        }
  
        function fillCell(x, y) {
          color = inputColor.value;
          ctx.fillStyle = color;
          for (i = 0; i < cuadritos.length; i++) {
            var cuadro = cuadritos[i];
            if (
              x > cuadro[0] &&
              x < cuadro[0] + cuadro[2] &&
              y > cuadro[1] &&
              y < cuadro[1] + cuadro[3]
            ) {
              ctx.fillRect(
                cuadro[0],
                cuadro[1],
                sizeCuadro.ancho,
                sizeCuadro.alto
              );
              break;
            }
          }
          dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 0.4, "#44414B");
        }
  
  
                     console.log(sizeCuadro.ancho)
       
        dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 0.5, "#44414B");
      } else {
        alert("No se pudo cargar el contexto");
      }
    }
  };