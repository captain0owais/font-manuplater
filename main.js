

function setup(){
    video = createCapture(VIDEO);
    video.size(500 , 400);
    canvas = createCanvas(605 , 505);

    poseNet = ml5.poseNet(video , modelLoded);

    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#c4fffe');
}

function modelLoded(){
    console.log("poseNet is initilized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}