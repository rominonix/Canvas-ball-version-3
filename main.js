var boll = document.getElementById("boll");
boll.width = 500;
boll.height= 300;
boll.style.backgroundColor="#DCFFFE";
var ctx = boll.getContext("2d");

var x = 12;
var y = 150;
var speedX = 2;
var speedY = 2;
var radie = 10;
function animation()
{
    ctx.clearRect(0,0,boll.width, boll.height);
    ctx.beginPath();
    ctx.arc(x,y,radie,0,2*Math.PI,false);
    ctx.fillStyle ="#EB5995"
    ctx.closePath();
    ctx.fill();
    x += speedX;
    y += speedY;
    if(x>boll.width-radie || x<radie)
    {
        speedX = -speedX;
    }
    if(y>boll.height-radie || y<radie)
    {
        speedY = -speedY;
    }
    requestAnimationFrame(animation);
}

animation();