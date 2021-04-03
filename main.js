function setup() {
    re = 0;
    le = 0;

    rwx = 0;
    lwx = 0;

    difference = 0;

    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('white');
    document.getElementById("font").innerHTML = "The Font's Side Is: " + difference + " px";
    fill('black');
    text('Danny', re, le);
    textSize(difference)
}

function modelLoaded() {
    console.log("-----\nposeNet model loaded!\n-----");
}

function gotPoses(results) {
    re = results[0].pose.rightEye.x;
    le = results[0].pose.leftEye.x;
    rwx = results[0].pose.rightWrist.x;
    lwx = results[0].pose.leftWrist.x;

    difference = floor(lwx - rwx);

    console.log(re + le + rwx + lwx);
}