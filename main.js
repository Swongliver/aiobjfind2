object_name='';
objects = [];
status1 = "";

function preload()
{
	
}

function setup() {
  canvas = createCanvas(380, 380);
  canvas.position(525,275);
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  
}

function modelLoaded() {
  console.log("Model Loaded!")
  status1 = true;
  
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}
function start(){
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
object_name=document.getElementById("object").value
}


function draw() {
  image(video, 0, 0, 300, 300);
     
       
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
}}
