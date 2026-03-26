let commands = [];
let player = document.getElementById("player");

function startGame() {
  document.getElementById("game").style.display = "block";
}

function addCommand(cmd) {
  commands.push(cmd);
  document.getElementById("codeList").innerHTML += "<li>" + cmd + "</li>";
}

function runCode() {
  let i = 0;

  function execute() {
    if (i >= commands.length) return;

    let cmd = commands[i];

    if (cmd === "right") {
      player.style.left = (player.offsetLeft + 50) + "px";
    }

    if (cmd === "left") {
      player.style.left = (player.offsetLeft - 50) + "px";
    }

    if (cmd === "jump") {
      player.style.bottom = "50px";
      setTimeout(() => {
        player.style.bottom = "0px";
      }, 200);
    }

    i++;
    setTimeout(execute, 500);
  }

  execute();
}
