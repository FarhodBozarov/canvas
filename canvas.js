const yuza = document.querySelector("canvas");
const WIDTH = 1200;
const HEIGHT = 600;
yuza.width = WIDTH;
yuza.height = HEIGHT;

const ctx = yuza.getContext("2d");

ctx.fillStyle = "#021B30";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

ctx.lineWidth = 2;
ctx.strokeStyle = "#91979C";
ctx.moveTo(WIDTH / 24, HEIGHT - HEIGHT / 12);
ctx.lineTo(WIDTH - WIDTH / 5, HEIGHT - HEIGHT / 12);
ctx.moveTo(WIDTH / 24, HEIGHT - HEIGHT / 12);
ctx.lineTo(WIDTH / 24, HEIGHT - (HEIGHT / 1.2 + HEIGHT / 8));
ctx.stroke();

ctx.lineWidth = 0.3;
for (let i = 0; i < 5; i++) {
  ctx.moveTo(WIDTH / 24, (i + 1) * (HEIGHT / 6) - HEIGHT / 8);
  ctx.lineTo(WIDTH - WIDTH / 5, (i + 1) * (HEIGHT / 6) - HEIGHT / 8);
}
ctx.stroke();

function massivlar(massiv) {
  for (let i = 1; i <= 12; i++) {
    massiv.push(Math.round(Math.random() * ((HEIGHT / 6) * 5)));
  }
}
let massiv = [],
  massiv1 = [],
  massiv2 = [],
  massiv3 = [],
  massiv4 = [];
massivlar(massiv);
massivlar(massiv1);
massivlar(massiv2);
massivlar(massiv3);
massivlar(massiv4);

// let max = massiv[0];
// for (let i = 0; i < massiv.length; i++) {
//   if (max <= massiv[i]) {
//     max = massiv[i];
//   }
// }

// let yaxlit = Math.floor(max % 100);
// if (yaxlit >= 50) {
//   max += 100 - yaxlit;
// } else {
//   max += 50 - yaxlit;
// }

createChart(massiv, "#00E4BE");
createChart(massiv1, "#55AA00");
createChart(massiv2, "#FF007F");
createChart(massiv3, "#FFAA00");
createChart(massiv4, "#E74AAE");

function createChart(arr, color) {
  ctx.beginPath();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = color;
  for (let i = 1; i <= 12; i++) {
    ctx.lineTo(
      i * (WIDTH / 16) + WIDTH / 24,
      HEIGHT / 1.2 + HEIGHT / 24 - arr[i - 1]
    );
    ctx.moveTo(
      i * (WIDTH / 16) + WIDTH / 24,
      HEIGHT / 1.2 + HEIGHT / 24 - arr[i - 1]
    );
  }
  ctx.stroke();
}

ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 0.25;

let labels = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

let label = ["500", "400", "300", "200", "100"];

for (let i = 0; i < label.length; i++) {
  ctx.strokeText(label[i], WIDTH / 40, i * (HEIGHT / 6) + HEIGHT / 21.5);
}

for (let i = 0; i < labels.length; i++) {
  ctx.strokeText(
    labels[i],
    i * (WIDTH / 16) + WIDTH / 12,
    (HEIGHT / 6) * 5 + HEIGHT / 10
  );
}
