// JavaScript Document
/*
	myready(function (){
	
	});
*/
function myReady(fn){
		if(document.addEventListener){
			document.addEventListener("DOMcontentLoaded",fn(),false);
		}else{
			IEContentLoaded();
		}
}
function IEContentLoaded(fn){
	var isdone=false;
	 	function ainit(){
			if(!isdone){
				isdone=true;
				fn();
			}
			
		}
	
(function (){
	try{
		document.documentElement.doScroll("left");
	}catch(e){
		setTimeout(arguments.callee,10);
	}
	annit();
})();
document.onreadystatechange=function(){
		if(document.readyState=="complete"){
			annit();
			
		}
}
}
