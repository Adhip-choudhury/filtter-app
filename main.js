noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
  clown_hat = loadImage('https://i.postimg.cc/nVvbknfP/png-clipart-six-thinking-hats-red-hat-linux-red-hat-enterprise-linux-lady-hat-s-hat-cowboy-hat-remov.png');
  clown_moustache=loadImage('https://i.postimg.cc/VN60q7SK/png-clipart-moustache-moustache-removebg-preview.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(530, 250);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
  image(clown_hat, noseX-70, noseY-160, 200, 100);
  image(clown_moustache, noseX-60, noseY+30, 150, 45);

  // fill(255,0,0);
  // stroke(255,0,0);
  // circle(noseX, noseY, 20);
  
}

function take_snapshot(){    
  save('myFilterImage.png');
}
