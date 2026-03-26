const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 200, size: 30 };
let cake = { x: 400, y: 200, size: 30 };

let commands = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // player
  ctx.fillStyle = "pink";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // cake
  ctx.fillStyle = "brown";
  ctx.fillRect(cake.x, cake.y, cake.size, cake.size);
}

function addCommand(cmd) {
  commands.push(cmd);
  document.getElementById("codeList").innerHTML += "<li>" + cmd + "</li>";
}

function runCode() {
  let i = 0;

  function run() {
    if (i >= commands.length) return;

    let cmd = commands[i];

    if (cmd === "right") player.x += 50;
    if (cmd === "left") player.x -= 50;
    if (cmd === "jump") player.y -= 50;

    draw();
    checkWin();

    i++;
    setTimeout(run, 500);
  }

  run();
}

function checkWin() {
  if (Math.abs(player.x - cake.x) < 30) {
    alert("🎉 Kamu berhasil ambil kue!");
  }
}

// initial draw
draw();
