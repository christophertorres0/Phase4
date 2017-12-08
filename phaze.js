// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

function makeOpaque(e){
	e.classList.add("opaque");
}

function play1(){
       document.getElementById("thestoneroses").play();
	document.getElementById("thesmiths").pause();
	document.getElementById("thecure").pause();
}
}

function play2(){
       document.getElementById("thesmiths").play();
	document.getElementById("thecure").pause()
	 document.getElementById("thestoneroses").pause();
}

function play3(){
       document.getElementById("thecure").play();
	 document.getElementById("thestoneroses").pause();
	 document.getElementById("thesmiths").pause();
}

