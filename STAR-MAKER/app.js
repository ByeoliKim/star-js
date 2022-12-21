const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// canvas 에는 붓의 권한을 주는 getContext라는 기능을 가지고 있음.
canvas.width = 800;
canvas.height= 800;
// canvas 의 가로와 세로를 설정해 줌.
ctx.rect(10, 10, 150, 150);
ctx.rect(150, 150, 100, 100);
ctx.fill();
ctx.rect(250, 250, 100, 100);
ctx.stroke();
//fillRect 함수를 호출함. 이것은 사각형이고 파라미터로 x, y, width, height 의 값을 받음.
//fillRect 는 직사각형이 색으로 채워지고, strokeRect 를 쓰면 선만 생김.
ctx.beginPath(); // 기존 경로 해제 후, 새로운 경로를 만든다! 이전 경로와 단절됐다는 뜻.
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "pink";
ctx.fill();
// setTimeout(() => { ctx.fill(); }, 300);
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(150, 100);
ctx.lineTo(150, 150);
ctx.lineTo(100, 150);
ctx.lineTo(100, 100);
ctx.strokeStyle = "#7c85e3";
ctx.stroke();