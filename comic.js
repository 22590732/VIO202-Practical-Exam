let comic = document.getElementById("comic");
let playPage1 = document.getElementById("next");
let Page1Audio = document.getElementById("page1Audio");
let back = document.getElementById("back");

playPage1.addEventListener("click", p1);


back.addEventListener('click', backToIndex);

function backToIndex() {
	window.location.href = "index.html";
}

let page = document.createElement("img");
comic.appendChild(page);

function p1() {
	Page1Audio.play();
	

	page.setAttribute("src", "Page1.gif");
	page.setAttribute("style", "position: absolute; height: 600px;");
	
	 //console.log("the button works");
	 // playPage1.on("complete", start);

	 Page1Audio.addEventListener("ended", Page1End);

	playPage1.removeEventListener('click', p1);
   	playPage1.addEventListener('click', p2);
   	back.addEventListener('click', backToIndex);

	function Page1End() {
	  // This function will be called when the audio file finishes playing
	  //console.log("Audio playback has ended.");
	   page.setAttribute("src", "page1.png");
	}
}

let Page2Audio = document.getElementById("page2Audio");

function p2() {
	Page1Audio.pause(); 
  	Page1Audio.currentTime = 0;
	Page2Audio.play();

	page.setAttribute("src", "Page2.gif");
	page.setAttribute("style", "position: absolute;");

	Page2Audio.addEventListener("ended", Page2End);

	back.removeEventListener('click', backToIndex);
	back.addEventListener('click', p1);

	playPage1.removeEventListener('click', p2);
	playPage1.addEventListener('click', p3);

	function Page2End() {
		page.setAttribute("src", "Page2.png");		
	}
}

let Page3Audio = document.getElementById("page3Audio");

function p3() {
	Page2Audio.pause(); 
  	Page2Audio.currentTime = 0;
	Page3Audio.play();

	page.setAttribute("src", "Page3.gif");
	page.setAttribute("style", "position: absolute;");

	Page3Audio.addEventListener("ended", Page3End);

	back.removeEventListener('click', p2);
	back.addEventListener('click', p3);

	playPage1.removeEventListener('click', p3);
	playPage1.addEventListener('click', p4);

	function Page3End() {
		page.setAttribute("src", "Page3.png");
	}
}

function p4() {

}