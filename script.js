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
<pre><code>terminal:~$ ssh -p 2220 bandit0@bandit.labs.overthewire.org</code></pre>
<p><strong>Bandit Level 0-1:</strong></p>
<p>ls to list the files in a directory and use "cat readme" to read the content of the file.Password obtained for next level is <span class="blur">ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If</span>
</p>
<p><strong>Bandit Level 1-2:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit1@bandit.labs.overthewire.org</code></pre>
<p>The challenge was to read the data from the file named "-". Firstly i tried directly with this command "cat -" but no results. Then I first identified where I am with "pwd" and I was in /home/bandit1/. Now in order to read the content of the file I used the command "cat /home/bandit1/-" and got the password for the next level which was <span class="blur">263JGJPfgU6LtdEvgfWU1XP5yac29mFx</span>
</p>
<p><strong>Bandit Level 2-3:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit2@bandit.labs.overthewire.org</code></pre>
<p>This challenge was similar to the last one. In this I have to read the content of the files named ‘ –spaces in this filename–’, and the approach is same just read the file with the whole directory location which was: cat /home/bandit2/–spaces in this filename–’ and the password is <span class="blur"> MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx</span></p>
<p><strong>Bandit Level 3-4:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit3@bandit.labs.overthewire.org</code></pre>
<p>So the challenge was to read the content of a file which was hidden in a directory named ‘inhere’. So in order to do that firstly navigate to the directory using the command ‘cd inhere’. Then use the ‘ls’ command with the flag -a which is used to list all the files even hidden files. And with that we got the hidden file named ‘...Hiding-From-You’. Now to read the content of the file we use ‘ cat …Hiding-From-You’ and we got the password for the next level which is <span class="blur">2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ</span></p>
<p><strong>Bandit Level 4-5:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit4@bandit.labs.overthewire.org</code></pre>
<p>Fewwww, This was intense so the object was to find a human-readable file. In a directory named inhere we are given 10 file also with a bit different formats. So humans-readable file is a ASCII file. So after searching so much I found out that we can use file module of kali linux inorder to know the file type of a file present in a directory. So I used the command ‘file ./’, where file is the name of the module while ./ means current directory and ./* means that we want to scan the whole current directory in which we are after that i found the password to be <span class="blur">4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw</span></p>
<p><strong>Bandit Level 5-6:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit5@bandit.labs.overthewire.org</code></pre>
<p>Now in this level we are given multiple directories in the main directory which was inhere. So in order to find the password we are given with some specifications of the file which contains the password. Since the file only tell the type, So after searching the google I found that we can use Find module to find the specific file. So it was pretty simple a human-readable file with exactly 1033c size and not executable. So I used the command ‘ find -readable -size 1033c’ where c represents the size that is 1033 bytes. The password obtained was <span class="blur">HWasnPhtq9AVKe0dmk45nxy20cvUa6EG</span></p>
<p><strong>Bandit Level 6-7:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit6@bandit.labs.overthewire.org</code></pre>
<p>Ok so this level does not provide that much of things in the machine. But we are provided with some specification (again). So the file is owned by bandit7 and the group it belongs to is bandit6 and the size of the file should be 33 bytes. So using the command logic in the previous level we can use the following command ‘file -type f -user bandit7 -group bandit6 -size 33c’ but now it gives a lot of permission denied error message but in order to filter that we can use ‘2>/dev/null’ in the end of the same command like this ‘ file -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null’ and we get the file and after reading the content of the file we can find the password which is <span class="blur">morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj</span></p>
<p><strong>Bandit Level 7-8:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit7@bandit.labs.overthewire.org</code></pre>
<p>Ok so this level was quiet easy for me because the task was to find the password which is inside a file named data.txt and it has so many words and gibberish things but, I used grep in order to extract the required data. Now the second clue was the password is after the word millionth. So I used the following command ‘cat data.txt | grep ‘millionth’’ and yes I got the password somehow which was <span class="blur">dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc</span></p>
<p><strong>Bandit Level 8-9:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit8@bandit.labs.overthewire.org</code></pre>
<p>Ok so this level was interesting because the task was to find the password which was in a file named data.txt. Now the the text we need to find is the only thing that has occurred once i.e no repetition. So It was obvious we need to used cat to read the data now the main thing is how we can count the occurrence. So the lab description says some modules and one of which was uniq. So i looked at the documentation and figured out that this is the thing I was looking for. Now firstly I used the command ‘ cat data.txt | uniq -u’ where u flag tells the file which is unique.After the running the command I got so many passwords. So I know I was missing something in my command, but i like to find things from the data manually so i ran another command which was ‘ cat data.txt | uniq -u -c’ and now and I have numbers i.e how many time it occured in a line. So Now I started looking at the results still it was somewhat not good. But one thing I noticed that there are some lines was same in another line but the order was different. So I know got to use sort module because it was also mentioned in the lab description. So finally ran a command ‘ cat data.txt | uniq -u -c  | sort ‘ and now i can say the results are much cleared. So after that I found a single line which was unique and never repeated which was <span class="blur">4CKMh1JI91bUIZZPXDqGanal4xvAg0JM</span>. And just in case I googled ‘ how i can find something in a file which occurs only once’ and found a similar command which was ‘ cat data.txt | sort | uniq -u’ and got a single result which was same which I found earlier. So eventually I did found the password. But still I don’t know why the result is different by just switching the uniq and sort commands.</p>
<p><strong>Bandit Level 9-10:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit9@bandit.labs.overthewire.org</code></pre>
<p>Ok so this problem was easy as the task was to find the password which in a file names ‘data.txt’ and the text is humans readable it starts with a trail of ===. So it was simple we can use grep for it as grep has a flag ‘a’ which prints only the text and provide the pattern we need to match. So the final command was ‘ grep -a ‘===’ data.txt’ ane I got the password which was <span class="blur">FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey</span></p>
<p><strong>Bandit Level 10-11:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit10@bandit.labs.overthewire.org</code></pre>
<p>Damm this level was so easy . So the password is in a file named ‘ data.txt’ and the task says it is stored in a base64 format. So I know I need to decode the content using the base64 module and after reading the man page for base64 there was a flag ‘-d’ which does the thing for me. And the final command was ‘ base64 -d data.txt’ and the password which I got was <span class="blur">dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr</span></p>
<p><strong>Bandit Level 11-12:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit11@bandit.labs.overthewire.org</code></pre>
<p>Ok so this level was easy the password is stored in a file named ‘data.txt’ and the characters of the file is rotated by 13 place. So I first copied the data of the file and then used cyber chef in order to get the password which was <span class="blur">7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4<span></p>
<p><strong>Bandit Level 12-13:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit12@bandit.labs.overthewire.org</code></pre>
<p>Dammmmmmmmmmm !! THis level was fun and easy and loonnggggggg. So a file was given named ‘data.txt’ and the instructions say that the file is compressed in a hex dump and compressed multiple times. So now the main thing is to extract the data using the right tool. I don’t whether I choose the right way but the important thing is that I got the password by myself. So firstly I used hexdump module and extracted the file data. Then I used the file command to know the type of data present in the file we got from hexdump. Then there were different file extensions, I will not mention the process but I will mention the type like tar(don’t get confused with POSIX), gz, bz2 and again the same. So I got the final answer which was <span class="blur">FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn</span></p>
<p><strong>Bandit Level 13-14:</strong></p>
<pre><code>terminal:~$ ssh -p 2220 bandit13@bandit.labs.overthewire.org</code></pre>
<p>comming soon......</p>

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