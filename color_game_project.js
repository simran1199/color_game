var numberofsquares=6;
var colors=generaterandomcolors(numberofsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var msgdisplay=document.querySelector("#msg");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numberofsquares=3;
	colors=generaterandomcolors(numberofsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i =0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			}
			else{
				squares[i].style.display="none";
			}
	}
});


hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberofsquares=6;
	colors=generaterandomcolors(numberofsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for (var i =0; i < squares.length; i++) {
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}

});


resetbutton.addEventListener("click",function(){
	colors=generaterandomcolors(6);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	resetbutton.textContent="new colors"
	msgdisplay.textContent="  ";
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.background="steelblue";
});


colordisplay.textContent=pickedcolor;

for(var i=0; i< squares.length; i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		//alert("cdsvd");
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor){
			msgdisplay.textContent="CORRECT!!";
			resetbutton.textContent="PLAY AGAIN!!"
			changecolors(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
		}
		else{
			this.style.backgroundColor="#232323";
			msgdisplay.textContent="Try Again";
		}
	});
}
 
function changecolors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];

}

function generaterandomcolors(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", " + g + ", " + b +")";
}







