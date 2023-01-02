const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height= 800;

//집 모양 만들기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

//사람 모양 만들기
ctx.fillRect(200, 200 - 50, 15, 100);
ctx.fillRect(400, 200 - 50, 15, 100);
ctx.fillRect(280, 200 - 50, 60, 200);

ctx.arc(310, 100, 50, 0, 2 * Math.PI);
// 네 번째 파라미터는 원의 starting angle 
// 다섯 번째 파라미터는 ending angle 인데, 원을 끝내는 angle
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(290, 100, 8, 0, Math.PI, 2 * Math.PI);
ctx.arc(330, 100, 8, 0, 2 * Math.PI);
ctx.fill();