var R=Math.ceil(Math.random()*255);
var G=Math.ceil(Math.random()*255);
var B=Math.ceil(Math.random()*255);
var result = "rgb"+"("+ R + ", " + G + ", " + B +")";
document.getElementsByClassName("randomColor")[0].textContent="RGB("+ R +"," + G +"," + B + ")";
function randomcolorgenerator(){
    var R=Math.ceil(Math.random()*255);
    var G=Math.ceil(Math.random()*255);
    var B=Math.ceil(Math.random()*255);
    return "rgb("+ R +"," + G +"," + B + ")";
}
var str=null;
document.getElementById("newcolors").addEventListener("mouseover",function(){
  	document.getElementById("newcolors").style.color="white";
  	document.getElementById("newcolors").style.backgroundColor="steelblue";
  if(str==="mouseout"){
  	document.getElementById("newcolors").style.color="steelblue";
  	document.getElementById("newcolors").style.backgroundColor="white";
  }
  if(str==="click")
  window.location.reload(true);	
});
document.getElementById("newcolors").addEventListener("mouseout",function(){
  	document.getElementById("newcolors").style.color="steelblue";
  	document.getElementById("newcolors").style.backgroundColor="white";
});
document.getElementById("newcolors").addEventListener("click",function(){
  window.location.reload(true);	
});
var colors=[randomcolorgenerator(),randomcolorgenerator(),randomcolorgenerator(),randomcolorgenerator(),randomcolorgenerator(),randomcolorgenerator()];
var squares=document.querySelectorAll(".square");
colors[Math.ceil(Math.random()*5)]=result;
for(var i=0;i<squares.length;i++)
	squares[i].style.backgroundColor=colors[i];

 for(var i=0;i<squares.length;i++)
 {
	  squares[i].addEventListener("click",function(){
	  	 
		  if(this.style.backgroundColor===result)
		  {
		  	document.querySelector("h1").style.backgroundColor=result;
		  	for(var i=0;i<squares.length;i++)
			squares[i].style.backgroundColor=result;
		    document.querySelector("#tryagain").textContent="Congrats";
		    document.querySelector("#newcolors").textContent="PlayAgain!";
		  }
		  else
		   	{
		   		this.style.backgroundColor="#232323";
		   		document.querySelector("#tryagain").textContent="Try Again!";
		   	}
	 });
 }