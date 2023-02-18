let shape = document.getElementsByClassName('shapeCard');
var symbol, color;
for (const shapes of shape) {
    shapes.addEventListener('mouseover', function(){
        symbol = "0123456789ABCDEF";
        color = "#";
        for(let i=0; i<6; i++){
            color = color+symbol[Math.floor(Math.random()*16)];
            shapes.style.backgroundColor = color;
        }
    });
}
for (const shapes of shape) {
    shapes.addEventListener('mouseout', function(){
        for(let i=0; i<6; i++){
            shapes.style.backgroundColor = "transparent";
        }
    });
}
