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



function resetAll(){
	document.getElementById("one").classList.remove("tan");
	document.getElementById("two").classList.remove("tan");
	document.getElementById("three").classList.remove("tan");
	document.getElementById("four").classList.remove("tan");
	document.getElementById("one").innerHTML="";
	document.getElementById("two").innerHTML="";
	document.getElementById("three").innerHTML="";
	document.getElementById("four").innerHTML="";
}


function toggleone(elem){
	document.getElementById("one").classList.toggle("tan");
	elem.innerHTML = "JavaScriptSorcery";
}

function toggletwo(elem){
	document.getElementById("two").classList.toggle("tan");
	elem.innerHTML = "JavaScriptSorcery";
}

function togglethree(elem){
	document.getElementById("three").classList.toggle("tan");
	elem.innerHTML = "JavaScriptSorcery";
}

function togglefour(elem){
	document.getElementById("four").classList.toggle("tan");
	elem.innerHTML = "JavaScriptSorcery";
}

