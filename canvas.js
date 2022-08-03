const yuza = document.querySelector("canvas");
yuza.width = 1200;
yuza.height = 600;

const ctx = yuza.getContext("2d");

ctx.fillStyle = "#021B30";
ctx.fillRect(0, 0, 1200, 600);

ctx.lineWidth = 2;
ctx.strokeStyle = "#91979C";
ctx.moveTo(50, 550);
ctx.lineTo(975, 550);
ctx.moveTo(50, 550);
ctx.lineTo(50, 15);
ctx.stroke();

ctx.lineWidth = 0.3;
for (let i = 0; i < 5; i++) {
  ctx.moveTo(50, (i + 1) * 100 - 75);
  ctx.lineTo(975, (i + 1) * 100 - 75);
}
ctx.stroke();

function massivlar(massiv) {
  for (let i = 1; i <= 12; i++) {
    massiv.push(Math.round(Math.random() * 500));
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
    ctx.lineTo(i * 75 + 50, 525 - arr[i - 1]);
    ctx.moveTo(i * 75 + 50, 525 - arr[i - 1]);
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
  ctx.strokeText(label[i], 30, i * 100 + 28);
}

for (let i = 0; i < labels.length; i++) {
  ctx.strokeText(labels[i], i * 75 + 100, 562);
}
