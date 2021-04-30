function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,450);
    canvas.position(510,120);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background('#00fffb');
}
function modelLoaded() {
    console.log("POSENET is initialised");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}