document.body.innerHTML ='<div id="el" style="position:fixed;width:50px;height:50px;z-index:1;background:#000;left:0;top:0"></div>';
var el = document.getElementById('el');

var bodyWidth = document.body.clientWidth; 
var startWidth = 50;
var endWidth = 100;
var endpoint = bodyWidth - endWidth;
var currentWidth = startWidth;
var currentPosition = 0;
var reverse = false;
var changeColor = 20;
var changeSize = Math.floor((bodyWidth-endWidth) / (endWidth-startWidth));

var interval = setInterval(animate, 5);
function animate() {
	switch(currentPosition) {
		case 0:
			reverse = false;
			currentPosition++;
			break;
		case endpoint:
			reverse = true;
			currentPosition--;
			break;
		default:
			if(reverse) {
				currentPosition--;
			} else {
				currentPosition++; 		
			}
			el.style.left = currentPosition + "px";	
	}

	if(currentPosition%changeSize == 0) {
		if(reverse) {
			currentWidth--;
		} else {
			currentWidth++; 		
		}

		if(currentWidth>=startWidth && currentWidth<=endWidth) {
			el.style.width = currentWidth+"px";
			el.style.height = currentWidth+"px";
		}		
	}

	if(currentPosition%changeColor == 0) {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		el.style.background = "#"+randomColor;
	}
}