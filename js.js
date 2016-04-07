function createStyle(){
	return"*{padding:0;margin:0;border:0}.loading{width:640px;height:1024px;margin:0 auto}.loadImg{width:640px;height:1024px;animation:fadeInOut 3s linear;-webkit-animation:fadeInOut 3s linear;-moz-animation:fadeInOut 3s linear;opacity:0}@keyframes fadeInOut{0%{opacity:0}25%{opacity:.5}45%{opacity:1}50%{opacity:1}55%{opacity:1}75%{opacity:.5}100%{opacity:0}}@-moz-keyframes fadeInOut{0%{opacity:0}25%{opacity:.5}45%{opacity:1}50%{opacity:1}55%{opacity:1}75%{opacity:.5}100%{opacity:0}}@-webkit-keyframes fadeInOut{0%{opacity:0}25%{opacity:.5}45%{opacity:1}50%{opacity:1}55%{opacity:1}75%{opacity:.5}100%{opacity:0}}"
}
function addStyle(){
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = createStyle();
	window.document.head.appendChild(style);
}
function addDom(){
	var div = document.createElement("div");
	div.className = "loading";
	window.document.body.appendChild(div);
	var img = document.createElement("img");
	img.src="img/bg.png";
	img.id="loadImg";
	img.className="loadImg";
	div.appendChild(img);
}
window.onload=function(){
	addStyle();
	addDom();
}