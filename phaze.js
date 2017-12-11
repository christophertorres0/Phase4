//Plays function by finding the ID in the HTML File on the bottom of the code//
//Pause funtion to restrict so that their only be one song playing at a time//
function play1(){
       document.getElementById("thestoneroses").play();
	document.getElementById("thesmiths").pause();
	document.getElementById("thecure").pause();
}

//Plays function by finding the ID in the HTML File on the bottom of the code//
//Pause funtion to restrict so that their only be one song playing at a time//
function play2(){
       document.getElementById("thesmiths").play();
	document.getElementById("thecure").pause()
	 document.getElementById("thestoneroses").pause();
}

//Plays function by finding the ID in the HTML File on the bottom of the code//
//Pause funtion to restrict so that their only be one song playing at a time//
function play3(){
       document.getElementById("thecure").play();
	 document.getElementById("thestoneroses").pause();
	 document.getElementById("thesmiths").pause();
}

// This function is run when the user clicks on the image on LINE 18 of your HTML (Vegeta powering up)
function changePicture(e){
	document.getElementById("vegeta").classList.toggle("power-up");
}




