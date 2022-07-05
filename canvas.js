var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var texto = document.getElementById("texto");

var c = canvas.getContext("2d");

var cantidad = 51;

function dibujar(){
    cantidad = parseInt(texto.value);
    for(i = 0; i < cantidad; i++){

        // Circle
        var x = Math.random()* window.innerWidth;
        var y = Math.random()* window.innerHeight;
        var radius = Math.random()*20;
    
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
      
        c.beginPath();
        c.arc(x,y,radius,Math.PI*2,0,false);
        c.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
        c.fill();
        c.closePath();

        //Line
        var x2 = Math.random()* window.innerWidth;
        var y2 = Math.random()* window.innerHeight;
        var r1 = Math.floor(Math.random()*255);
        var g1 = Math.floor(Math.random()*255);
        var b1 = Math.floor(Math.random()*255);
        var l = Math.random()*5
        c.beginPath();
        c.moveTo(x2 - 1, y2 - 1);
        c.lineTo(x2 + 1, y2 +1);
        c.strokeStyle = "rgba(" + r1 + "," + g1 + "," + b1 + ",1)";
        c.lineWidth = l;
        c.stroke();

        //Rectangle
        var x3 = Math.random()* window.innerWidth;
        var y3 = Math.random()* window.innerHeight;
    
        var r2 = Math.floor(Math.random()*255);
        var g2 = Math.floor(Math.random()*255);
        var b2 = Math.floor(Math.random()*255);

        var t1 = Math.random()*50;
        var t2 = Math.random()*50;
      
        c.beginPath();
        c.closePath();
        c.fillStyle = "rgba(" + r2 + "," + g2 + "," + b2 + ",1)";
        c.fillRect(x3, y3, t1, t2);

    }
}

function limpiar(){
    c.clearRect(0, 0, canvas.width, canvas.width);
}


