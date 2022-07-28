function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}


function draw() {
    Image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('redball.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    console.log(results);
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose x =" + results[0].pose.nose.y);
}