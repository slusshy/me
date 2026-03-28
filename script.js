// Writeups are stored locally so the site works by opening index.html directly.
const writeups = [
  {
    title: "Overthewire: Bandit Writeup - All levels !",
    summary: "This writeup include all the levels and my progess so far in the overthewire bandit wargame. And the language is more friendly rather than just giving a formal writeup",
    coverLabel: "Basics",
    tags: ["Linux", "CTF", "Wargame"],
    content: `
<p><strong>Bandit Level 0:</strong></p>
<p> Ssh connection: bandit.labs.overthewire.org<br>
Port: 2220<br>
Username: bandit0<br>
Password: bandit0<br>
</p>

<pre><code>bandit0@bandit:~$ ssh -p 2220 bandit0@bandit.labs.overthewire.org</code></pre>
<p><strong>Bandit Level 1:</strong></p>
<pre><code>bandit1@bandit:~$ ssh -p 2220 bandit1@bandit.labs.overthewire.org</code></pre>
<p>ls to list the files in a directory and use "cat readme" to read the content of the file.Password obtained for next level is <span class="blur">ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If</span>
</p>
<p><strong>Bandit Level 2:</strong></p>
<pre><code>bandit2@bandit:~$ ssh -p 2220 bandit2@bandit.labs.overthewire.org</code></pre>
<p>The challenge was to read the data from the file named "-". Firstly i tried directly with this command "cat -" but no results. Then I first identified where I am with "pwd" and I was in /home/bandit1/. Now in order to read the content of the file I used the command "cat /home/bandit1/-" and got the password for the next level which was <span class="blur">263JGJPfgU6LtdEvgfWU1XP5yac29mFx</span>
</p>
`
  }  
];

const homeView = document.getElementById("home-view");
const postView = document.getElementById("post-view");
const writeupList = document.getElementById("writeup-list");
const postTitle = document.getElementById("post-title");
const postContent = document.getElementById("post-content");
const backButton = document.getElementById("back-button");
const typingText = document.getElementById("typing-text");
const terminalForm = document.getElementById("terminal-form");
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");



function navigateToPage(target) {
  if (!target) {
    return;
  }

  document.body.classList.add("page-leaving");
  window.setTimeout(() => {
    window.location.href = target;
  }, 240);
}

function renderWriteupList() {
  if (!writeupList) {
    return;
  }

  writeupList.innerHTML = "";

  writeups.forEach((writeup, index) => {
    const item = document.createElement("div");
    item.className = "writeup-item";

    const body = document.createElement("div");
    body.className = "writeup-body";

    const topline = document.createElement("div");
    topline.className = "writeup-topline";

    const label = document.createElement("span");
    label.className = "writeup-cover";
    label.textContent = writeup.coverLabel || "field note";

    const state = document.createElement("span");
    state.textContent = "archive entry";

    const format = document.createElement("span");
    format.textContent = "static read";

    topline.appendChild(label);
    topline.appendChild(state);
    topline.appendChild(format);

    const titleButton = document.createElement("button");
    titleButton.className = "writeup-link";
    titleButton.type = "button";
    titleButton.textContent = writeup.title;
    titleButton.onclick = () => showWriteup(index);

    const meta = document.createElement("p");
    meta.className = "writeup-meta";
    meta.textContent = writeup.summary;

    const tags = document.createElement("div");
    tags.className = "writeup-tags";

    (writeup.tags || []).forEach((tagText) => {
      const tag = document.createElement("span");
      tag.className = "writeup-tag";
      tag.textContent = `# ${tagText}`;
      tags.appendChild(tag);
    });

    body.appendChild(topline);
    body.appendChild(titleButton);
    body.appendChild(meta);
    body.appendChild(tags);
    item.appendChild(body);
    writeupList.appendChild(item);
  });
}

// Toggle views instead of reloading so navigation feels immediate and static-file friendly.
function showWriteup(index) {
  if (!postTitle || !postContent || !homeView || !postView) {
    return;
  }

  const selectedWriteup = writeups[index];

  postTitle.textContent = selectedWriteup.title;
  postContent.innerHTML = selectedWriteup.content;
  homeView.classList.add("hidden");
  postView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  if (!homeView || !postView) {
    return;
  }

  postView.classList.add("hidden");
  homeView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Type the hero headline once on load for a terminal-like intro effect.
function runTypingAnimation() {
  if (!typingText) {
    return;
  }

  const fullText = typingText.dataset.text || "";
  let index = 0;

  typingText.textContent = "";
  typingText.style.opacity = "1";

  function typeNextCharacter() {
    if (index < fullText.length) {
      typingText.textContent += fullText.charAt(index);
      index += 1;
      setTimeout(typeNextCharacter, 54);
    }
  }

  window.setTimeout(typeNextCharacter, 180);
}

function appendTerminalLine(text, className = "") {
  if (!terminalOutput) {
    return;
  }

  const line = document.createElement("div");
  line.className = `terminal-line ${className}`.trim();
  line.textContent = text;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function runTerminal() {
  if (!terminalForm || !terminalInput || !terminalOutput) {
    return;
  }

  const routes = {
    archive: "archive.html",
    signals: "signals.html",
    notes: "notes.html"
  };

  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const rawCommand = terminalInput.value.trim();
    const command = rawCommand.toLowerCase();

    if (!rawCommand) {
      return;
    }

    appendTerminalLine(`guest@trace:~$ ${rawCommand}`, "terminal-line-command");

    if (command === "help") {
      appendTerminalLine("Available commands: cd archive, cd signals, cd notes, clear, home", "terminal-line-muted");
    } else if (command === "clear") {
      terminalOutput.innerHTML = "";
    } else if (command === "home") {
      appendTerminalLine("Already at home directory.", "terminal-line-success");
    } else if (command.startsWith("cd ")) {
      const target = command.replace(/^cd\s+/, "");

      if (routes[target]) {
        appendTerminalLine(`Opening ${target}...`, "terminal-line-success");
        window.setTimeout(() => {
          navigateToPage(routes[target]);
        }, 260);
      } else {
        appendTerminalLine(`No such directory: ${target}`, "terminal-line-error");
      }
    } else {
      appendTerminalLine("Command not found. Try: help", "terminal-line-error");
    }

    terminalInput.value = "";
  });
}

function wirePageTransitions() {
  document.body.classList.add("page-ready");

  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      navigateToPage(href);
    });
  });
}

if (backButton) {
  backButton.onclick = showHome;
}

renderWriteupList();
wirePageTransitions();
runTypingAnimation();
runTerminal();
