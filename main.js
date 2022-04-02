left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400 , 300);
    canvas = createCanvas(505 , 405);

    poseNet = ml5.poseNet(video , modelLoded);

    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#c4fffe');
    textSize(difference);
    fill("#00ff80");
    text('HELLO' , right_wrist_x , left_wrist_x);
}

function modelLoded(){
    console.log("poseNet is initilized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        console.log("Left Wrist X = " + left_wrist_x);
        console.log("Right Wrist X = " + right_wrist_x);
        difference = ceil(left_wrist_x - right_wrist_x);
    }
}