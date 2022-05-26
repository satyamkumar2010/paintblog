var mouseevent = "empty";
var lastx,lasty ;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
radius = document.getElementById("radius").value;
    mouseevent = "mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouseevent == "mouseDown") {
        console.log(" current lastx and lasty coordinates = ");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
ctx.arc(current_x,current_y, radius, 0, 2*Math.PI);
        console.log("lastx and lasty coordinates = ");
        console.log("x = " + lastx + "y = " + lasty);

console.log(" current lastx and lasty coordinates = ");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.stroke();
    }

    lastx = current_x;
    lasty = current_y;

}

function cleararea()
{
    ctx.clearRect(0 ,0, ctx.canvas.width, ctx.canvas.height);
}
