// var elements = document.getElementsByTagName('*');
//
// for (var i = 0; i < elements.length; i++) {
//    var element = elements[i];
//    // console.log( element );
//    // element.style.setProperty('border','solid 1px red');
//
//    var r = Math.floor(Math.random()*255);
//    var g = Math.floor(Math.random()*255);
//    var b = Math.floor(Math.random()*255);
//    var c = "rgb(" + r + "," + g + "," + b + ")";
//
//    element.style.setProperty('background-color',c);
//
// }

var html = document.querySelector('html');
var walker = document.createTreeWalker(html,NodeFilter.SHOW_TEXT);

var node;
while (node = walker.nextNode()) {
  node.nodeValue = node.nodeValue.replace(/trump/gi,'Some Guy');
}

document.addEventListener('mousemove', (event) => {
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});

function showCoords(event) {
  var cX = event.clientX;
  var sX = event.screenX;
  var cY = event.clientY;
  var sY = event.screenY;
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
  console.log(coords1 + "<br>" + coords2);
}
