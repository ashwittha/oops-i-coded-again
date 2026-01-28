//This controls the behavior (when you click “email”, it prints output + opens a link)
const output = document.getElementById("output");

function printLine(text) {
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
}

function runCommand(cmd) {
  printLine(`ashwittha.github.io:~ guest $ ${cmd}`);

  if (cmd === "email") {
    printLine("Opening email...");
    window.open("mailto:youremail@gmail.com", "_blank");
  }

  if (cmd === "resume") {
    printLine("Opening resume...");
    window.open("./Ashwittha_Resume.pdf", "_blank");
  }

  if (cmd === "github") {
    printLine("Opening GitHub...");
    window.open("https://github.com/ashwittha", "_blank");
  }

  if (cmd === "linkedin") {
    printLine("Opening LinkedIn...");
    window.open("https://www.linkedin.com/in/YOUR-LINK/", "_blank");
  }

  if (cmd === "logout") {
    printLine("Goodbye 👋");
    printLine("(just kidding, you can’t log out 😄)");
  }

  if (cmd === "secret") {
    printLine("✨ secret unlocked ✨");
    printLine("You found the easter egg!");
    printLine("Type: 'hire me' (jk... unless?) 😌");
  }

  printLine("");
}

document.querySelectorAll(".cmd").forEach((btn) => {
  btn.addEventListener("click", () => runCommand(btn.dataset.cmd));
});

// intro text
printLine("Welcome!");
printLine("Click a command above to get my links.");
printLine("");
