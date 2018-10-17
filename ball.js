(function(window,document,undefined){
var a = [];
window.requestAnimationFrame = (function(){
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback){
		setTimeout(callback,1000/60);
	}
})();
function Init(){
	AttachEvent();
	Gameloop();
}
Init();
function Gameloop(){
	for( var i = 0 ; i < a.length ; i++ ){
		if( a[i].alpha <= 0 ){
			document.body.removeChild(a[i].elem);
			a.splice(i,1);
			continue;
		}
		a[i].y -= 5;
		a[i].scale += 0.04;
		a[i].alpha -= 0.013;
		a[i].elem.style.cssText = "left:"+a[i].x+"px;top:"+a[i].y+"px;opacity:"+a[i].alpha+";transform:scale("+a[i].scale+","+a[i].scale+") rotate(45deg);";
	}
	requestAnimationFrame(Gameloop);
}
function AttachEvent(){
	var old = typeof window.onclick==="function" && window.onclick;
	window.onclick = function(event){
		old && old();
		Click(event);
	}
}
function Click(event){//alert("a")
	var d = document.createElement("div");
	d.className = "ball";
	var t = document.createTextNode("qwq!");
	d.appendChild(t);
	a.push({
		elem: d,
		x: event.clientX - 10,
		y: event.clientY - 5,
		scale : 1,
		alpha : 1,
	})
	document.body.appendChild(d);
}
})(window,document);
