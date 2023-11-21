let comic = document.getElementById("comic");
let playNext = document.getElementById("next");
let playAudio = document.getElementById("page1Audio");
let back = document.getElementById("back");

playNext.addEventListener("click", p1);

// back.addEventListener("click", backToIndex);

function backToIndex() {
	window.location.href = "index.html";
}


let page = document.createElement("img");
comic.appendChild(page);



function p1() {
	playAudio.pause();
	playAudio = document.getElementById("page1Audio");
	playAudio.play();

	page.setAttribute("src", "Page1.gif");
	page.setAttribute("style", "position: absolute; height: 600px;");

	playNext.removeEventListener("click", p1);
	playNext.addEventListener("click", goToP2);


	back.addEventListener("click", backToIndex);

	function goToP2() {
		back.removeEventListener("click", backToIndex);
		p2();
	}

	playAudio.addEventListener("ended", Page1End);

	function Page1End() {
		page.setAttribute("src", "Page1.jpg");
	}
}

function p2() {
	playAudio.pause();
	playAudio = document.getElementById("page2Audio");
	playAudio.play();

	page.setAttribute("src", "Page2.gif");

	playNext.removeEventListener("click", p2);
	playNext.addEventListener("click", goToP3);

	back.addEventListener("click", goToP1);

	function goToP1() {
		back.removeEventListener("click", goToP1);
		p1();
	}

	function goToP3() {
		back.removeEventListener("click", goToP1);
		p3();
	}

	playAudio.addEventListener("ended", Page2End);

	function Page2End() {
		page.setAttribute("src", "Page2.jpg");
	}
}

function p3() {
	playAudio.pause();
	playAudio = document.getElementById("page3Audio");
	playAudio.play();

	page.setAttribute("src", "Page3.gif");

	playNext.removeEventListener("click", p3);
	playNext.addEventListener("click", goToP4);

	back.addEventListener("click", goToP2);

	function goToP2() {
		back.removeEventListener("click", goToP2);
		p2();
	}

	function goToP4() {
		back.removeEventListener("click", goToP2);
		p4();
	}

	playAudio.addEventListener("ended", Page3End);

	function Page3End() {
		page.setAttribute("src", "Page3.jpg");
	}
}

function p4() {
	playAudio.pause();
	playAudio = document.getElementById("page4Audio");
	playAudio.play();

	page.setAttribute("src", "Page4.gif");

	playNext.removeEventListener("click", p4);
	playNext.addEventListener("click", goToP5);

	back.addEventListener("click", goToP3);

	function goToP3() {
		back.removeEventListener("click", goToP3);
		p3();
	}

	function goToP5() {
		back.removeEventListener("click", goToP3);
		p5();
	}

	playAudio.addEventListener("ended", Page4End);

	function Page4End() {
		page.setAttribute("src", "Page4.jpg");
	}
}

function p5() {
	playAudio.pause();
	playAudio = document.getElementById("page5Audio");
	playAudio.play();

	page.setAttribute("src", "Page5.gif");

	playNext.removeEventListener("click", p5);

	back.addEventListener("click", goToP4);

	function goToP4() {
		back.removeEventListener("click", goToP4);
		p4();
	}

	playAudio.addEventListener("ended", Page5End);

	function Page3End() {
		page.setAttribute("src", "Page5.jpg");
	}
}