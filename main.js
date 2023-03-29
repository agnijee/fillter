nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/4N6D7jcP/Clown-Nose-PNG-Image.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);

}
function modelloaded(){
    console.log('poseNet is initialized');
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,30,30);
}
function take_snapshot(){
    save ('agnijeet.png');
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex= results[0].pose.nose.x;
        nosey= results[0].pose.nose.y;
        console.log("nose X = "+results[0].pose.nose.x);
        console.log("nose Y = "+results[0].pose.nose.y);
    }
}