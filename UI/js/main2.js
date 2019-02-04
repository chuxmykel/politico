let loadFile = (event)=> {
	let image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var modal0 = document.getElementById('myModal0');

var btn0 = document.getElementById("myBtn0");

var span0 = document.getElementsByClassName("close0")[0];




btn0.onclick = function() {
  modal0.style.display = "block";
}

span0.onclick = function() {
  modal0.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
}




