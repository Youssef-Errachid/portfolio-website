// ===== Interactive Portfolio Terminal =====

// Tab switching
function switchHeroTab(tab) {
    document.querySelectorAll('.hero-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.hero-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    const panel = document.getElementById('panel-' + tab);
    panel.classList.add('active');
    // Re-trigger animation
    panel.style.animation = 'none';
    panel.offsetHeight;
    panel.style.animation = '';
    if (tab === 'terminal') {
        setTimeout(() => document.getElementById('terminal-input').focus(), 100);
    }
}

// Filesystem
const fs = {
    '~': {
        type: 'dir',
        children: {
            'portfolio': {
                type: 'dir',
                children: {
                    'about': {
                        type: 'dir',
                        children: {
                            'bio.txt': { type: 'file', content: 'Youssef Errachid — 25 years old, based in Morocco.\nA self-driven Full-Stack Developer specializing in building\n(and occasionally designing) exceptional digital experiences.\nCurrently focused on building accessible, human-centered\nproducts and expanding my technological horizons.' },
                            'education.txt': { type: 'file', content: '📚 Education:\n• 2021-2023  School of Technology (EST), Khenifra\n• 2020-2021  Baccalaureate in Life and Earth Sciences' },
                            'contact.txt': { type: 'file', content: '📧 Email: yousseferrachid91@gmail.com\n🔗 LinkedIn: linkedin.com/in/youssef-errachid\n🐙 GitHub: github.com/Youssef-Errachid' }
                        }
                    },
                    'skills': {
                        type: 'dir',
                        children: {
                            'languages.txt': { type: 'file', content: '💻 Languages: C/C++, C#, JavaScript (ES6+), Python' },
                            'web.txt': { type: 'file', content: '🌐 Web: HTML5/CSS3, React.js, Node.js, Express' },
                            'databases.txt': { type: 'file', content: '🗄️  Databases: SQL Server, T-SQL, MongoDB' },
                            'tools.txt': { type: 'file', content: '🔧 Tools: Git & GitHub, OOP, REST APIs, Docker' }
                        }
                    },
                    'projects': {
                        type: 'dir',
                        children: {
                            'FinPay': { type: 'dir', children: {
                                'README.md': { type: 'file', content: 'FinPay – Payment & Invoicing Management System\nA Java-based FinTech management system that centralizes\nand secures electronic payments between clients,\nservice providers, and the FinPay platform.\nTech: Java, JDBC, MySQL, PDF Generation, Maven' },
                                'github.link': { type: 'link', url: 'https://github.com/Youssef-Errachid/FinPay' }
                            }},
                            'XTrade': { type: 'dir', children: {
                                'README.md': { type: 'file', content: 'XTrade – Simplified Trading System\nA Java console application using OOP principles to\nsimulate a simplified financial trading platform.\nTech: Java, OOP, Stream API' },
                                'github.link': { type: 'link', url: 'https://github.com/Youssef-Errachid/Xtrade-App-' }
                            }},
                            'E-BANK': { type: 'dir', children: {
                                'README.md': { type: 'file', content: 'E-BANK – Bank Management System\nA Java console application simulating basic banking\noperations: accounts, deposits, withdrawals, transfers.\nTech: Java, OOP, Data Validation' },
                                'github.link': { type: 'link', url: 'https://github.com/Youssef-Errachid/E-BANK-Bank-Management-System' }
                            }},
                            'BiblioManager': { type: 'dir', children: {
                                'README.md': { type: 'file', content: 'BiblioManager – Library Management System\nA relational JavaScript console app managing books,\nsubscribers, and transaction states.\nTech: JavaScript, Node.js, State Management' },
                                'github.link': { type: 'link', url: 'https://github.com/Youssef-Errachid/calculator-project-.git' }
                            }},
                            'JS-Calculator': { type: 'dir', children: {
                                'README.md': { type: 'file', content: 'JS Calculator – Console App\nA dynamic JavaScript calculator with arithmetic and\nscientific operations and history logging.\nTech: JavaScript, Node.js, Data Structures' },
                                'github.link': { type: 'link', url: 'https://github.com/Youssef-Errachid/calculator-project-.git' }
                            }},
                            'Rock-Paper-Scissors': { type: 'dir', children: {
                                'README.md': { type: 'file', content: 'Rock Paper Scissors – C++ Console Game\nPlayer vs computer with score tracking,\nstructs, and game statistics.\nTech: C++, Enums, Structs, Random Logic' },
                                'github.link': { type: 'link', url: 'https://github.com/Youssef-Errachid/Rock-Paper-ScissRock-Paper-Scissors-gameors-game/tree/master' }
                            }},
                            'Math-Quiz-Game': { type: 'dir', children: {
                                'README.md': { type: 'file', content: 'Math Quiz Game – C++ Console App\nRandom math questions with difficulty levels,\nreal-time validation, and pass/fail tracking.\nTech: C++, Enums, Structs, Random Generation' },
                                'github.link': { type: 'link', url: 'https://github.com/Youssef-Errachid/Math-Quiz-Game/blob/master/MathOperationsQuiz.cpp' }
                            }}
                        }
                    },
                    'experience': {
                        type: 'dir',
                        children: {
                            'journey.txt': { type: 'file', content: '🚀 Present — Full-Stack Development Journey\n   Self-Directed Learning & Projects\n   Building skills via freeCodeCamp & The Odin Project.\n\n🎓 2021-2023 — Foundation in Technology\n   School of Technology (EST), Khenifra\n\n📜 2020-2021 — Baccalaureate\n   Life and Earth Sciences' }
                        }
                    }
                }
            }
        }
    }
};

let currentPath = ['~'];
const commandHistory = [];
let historyIndex = -1;

function resolvePath(pathParts) {
    let node = fs['~'];
    for (let i = 1; i < pathParts.length; i++) {
        if (!node.children || !node.children[pathParts[i]]) return null;
        node = node.children[pathParts[i]];
    }
    return node;
}

function getPrompt() {
    return `<span class="term-accent">visitor@youssef</span>:<span class="term-dir">${currentPath.join('/')}</span>$ `;
}

function updatePromptDisplay() {
    document.getElementById('terminal-prompt').innerHTML = getPrompt();
}

function appendOutput(html) {
    const output = document.getElementById('terminal-output');
    output.innerHTML += html;
    const body = document.getElementById('terminal-body');
    body.scrollTop = body.scrollHeight;
}

function appendLine(html) {
    appendOutput(html + '\n');
}

// Commands
const commands = {
    help: () => {
        return `<span class="term-accent">Available commands:</span>
  <span class="term-bold">ls</span>          <span class="term-dim">— List directory contents</span>
  <span class="term-bold">cd &lt;dir&gt;</span>    <span class="term-dim">— Change directory (cd .. to go back)</span>
  <span class="term-bold">cat &lt;file&gt;</span>  <span class="term-dim">— Read file contents</span>
  <span class="term-bold">pwd</span>         <span class="term-dim">— Print current directory</span>
  <span class="term-bold">whoami</span>      <span class="term-dim">— About me</span>
  <span class="term-bold">skills</span>      <span class="term-dim">— Show my tech stack</span>
  <span class="term-bold">projects</span>    <span class="term-dim">— List all projects</span>
  <span class="term-bold">contact</span>     <span class="term-dim">— Get my contact info</span>
  <span class="term-bold">date</span>        <span class="term-dim">— Show current date</span>
  <span class="term-bold">echo &lt;msg&gt;</span>  <span class="term-dim">— Print a message</span>
  <span class="term-bold">open &lt;file&gt;</span> <span class="term-dim">— Open .link files in browser</span>
  <span class="term-bold">tree</span>        <span class="term-dim">— Show directory tree</span>
  <span class="term-bold">clear</span>       <span class="term-dim">— Clear terminal</span>
  <span class="term-bold">history</span>     <span class="term-dim">— Show command history</span>`;
    },

    ls: () => {
        const node = resolvePath(currentPath);
        if (!node || !node.children) return '<span class="term-error">Cannot list: not a directory</span>';
        const items = Object.keys(node.children).map(name => {
            const child = node.children[name];
            if (child.type === 'dir') return `<span class="term-dir">${name}/</span>`;
            if (child.type === 'link') return `<span class="term-link" onclick="window.open('${child.url}','_blank')">${name}</span>`;
            return `<span class="term-file">${name}</span>`;
        });
        return items.join('  ');
    },

    cd: (args) => {
        if (!args[0] || args[0] === '~') { currentPath = ['~']; updatePromptDisplay(); return ''; }
        if (args[0] === '..') {
            if (currentPath.length > 1) currentPath.pop();
            updatePromptDisplay(); return '';
        }
        if (args[0] === '/') { currentPath = ['~']; updatePromptDisplay(); return ''; }
        // Handle paths like portfolio/projects
        const parts = args[0].split('/').filter(Boolean);
        const testPath = [...currentPath];
        for (const part of parts) {
            if (part === '..') { if (testPath.length > 1) testPath.pop(); continue; }
            const node = resolvePath(testPath);
            if (!node || !node.children || !node.children[part]) {
                return `<span class="term-error">cd: no such directory: ${args[0]}</span>`;
            }
            if (node.children[part].type !== 'dir') {
                return `<span class="term-error">cd: not a directory: ${part}</span>`;
            }
            testPath.push(part);
        }
        currentPath = testPath;
        updatePromptDisplay();
        return '';
    },

    cat: (args) => {
        if (!args[0]) return '<span class="term-error">cat: missing file argument</span>';
        const node = resolvePath(currentPath);
        if (!node || !node.children) return '<span class="term-error">cat: cannot read</span>';
        const file = node.children[args[0]];
        if (!file) return `<span class="term-error">cat: ${args[0]}: No such file</span>`;
        if (file.type === 'dir') return `<span class="term-error">cat: ${args[0]}: Is a directory</span>`;
        if (file.type === 'link') return `<span class="term-link" onclick="window.open('${file.url}','_blank')">${file.url}</span>`;
        return file.content;
    },

    pwd: () => '/' + currentPath.join('/'),

    whoami: () => {
        return `<span class="term-accent">Youssef Errachid</span>
<span class="term-dim">───────────────────────────────────</span>
I'm a self-driven Full-Stack Developer specializing
in building (and occasionally designing) exceptional
digital experiences. Currently, I'm focused on building
accessible, human-centered products and expanding my
technological horizons.

<span class="term-dim">Age:</span>     <span class="term-bold">25</span>
<span class="term-dim">Focus:</span>   <span class="term-bold">Full-Stack Development</span>
<span class="term-dim">Status:</span>  <span class="term-success">● Open to Opportunities</span>`;
    },

    skills: () => {
        return `<span class="term-accent">⚡ Technical Arsenal</span>
<span class="term-dim">───────────────────────────────────</span>
<span class="term-warning">Languages:</span>  C/C++, C#, JavaScript (ES6+), Python
<span class="term-warning">Web:</span>        HTML5/CSS3, React.js, Node.js, Express
<span class="term-warning">Databases:</span>  SQL Server, T-SQL, MongoDB
<span class="term-warning">Tools:</span>      Git & GitHub, OOP, REST APIs, Docker`;
    },

    projects: () => {
        const projDir = resolvePath(['~', 'portfolio', 'projects']);
        if (!projDir || !projDir.children) return '<span class="term-error">Projects not found</span>';
        let out = `<span class="term-accent">📂 Projects</span>\n<span class="term-dim">───────────────────────────────────</span>\n`;
        Object.keys(projDir.children).forEach((name, i) => {
            const p = projDir.children[name];
            const link = p.children && p.children['github.link'] ? p.children['github.link'].url : '#';
            out += `  <span class="term-bold">${i + 1}.</span> <span class="term-dir">${name}/</span>  <span class="term-link" onclick="window.open('${link}','_blank')">[GitHub]</span>\n`;
        });
        out += `\n<span class="term-dim">Use: cd portfolio/projects/&lt;name&gt; to explore</span>`;
        return out;
    },

    contact: () => {
        return `<span class="term-accent">📬 Contact Info</span>
<span class="term-dim">───────────────────────────────────</span>
<span class="term-warning">Email:</span>    <span class="term-link" onclick="window.open('mailto:yousseferrachid91@gmail.com')">yousseferrachid91@gmail.com</span>
<span class="term-warning">LinkedIn:</span> <span class="term-link" onclick="window.open('http://linkedin.com/in/youssef-errachid','_blank')">linkedin.com/in/youssef-errachid</span>
<span class="term-warning">GitHub:</span>   <span class="term-link" onclick="window.open('https://github.com/Youssef-Errachid','_blank')">github.com/Youssef-Errachid</span>`;
    },

    date: () => new Date().toString(),

    echo: (args) => args.join(' '),

    open: (args) => {
        if (!args[0]) return '<span class="term-error">open: missing file argument</span>';
        const node = resolvePath(currentPath);
        if (!node || !node.children) return '<span class="term-error">open: cannot read</span>';
        const file = node.children[args[0]];
        if (!file) return `<span class="term-error">open: ${args[0]}: No such file</span>`;
        if (file.type === 'link') { window.open(file.url, '_blank'); return `<span class="term-success">Opening ${file.url}...</span>`; }
        return `<span class="term-error">open: ${args[0]}: Not a link file</span>`;
    },

    tree: () => {
        const node = resolvePath(currentPath);
        if (!node || !node.children) return '<span class="term-error">tree: not a directory</span>';
        function buildTree(n, prefix, isLast) {
            let result = '';
            const keys = Object.keys(n.children || {});
            keys.forEach((key, i) => {
                const child = n.children[key];
                const last = i === keys.length - 1;
                const connector = last ? '└── ' : '├── ';
                const childPrefix = prefix + (last ? '    ' : '│   ');
                if (child.type === 'dir') {
                    result += prefix + connector + `<span class="term-dir">${key}/</span>\n`;
                    result += buildTree(child, childPrefix, last);
                } else {
                    result += prefix + connector + `<span class="term-file">${key}</span>\n`;
                }
            });
            return result;
        }
        return `<span class="term-dir">.</span>\n` + buildTree(node, '', true);
    },

    clear: () => { document.getElementById('terminal-output').innerHTML = ''; return null; },

    history: () => {
        if (commandHistory.length === 0) return '<span class="term-dim">No commands in history</span>';
        return commandHistory.map((cmd, i) => `  <span class="term-dim">${i + 1}</span>  ${cmd}`).join('\n');
    }
};

function processCommand(input) {
    const trimmed = input.trim();
    if (!trimmed) return;

    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    // Echo the command with prompt
    appendOutput(getPrompt() + `<span class="term-file">${trimmed}</span>\n`);

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (commands[cmd]) {
        const result = commands[cmd](args);
        if (result !== null && result !== undefined && result !== '') {
            appendLine(result);
        }
    } else {
        appendLine(`<span class="term-error">command not found: ${cmd}</span>\n<span class="term-dim">Type 'help' for available commands</span>`);
    }
}

// Terminal init
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');

    // Welcome message
    output.innerHTML = `<span class="term-accent">Welcome to Youssef's Portfolio Terminal</span>
<span class="term-dim">──────────────────────────────────────</span>
<span class="term-dim">Type</span> <span class="term-bold">help</span> <span class="term-dim">to see available commands.</span>
<span class="term-dim">Try:</span> <span class="term-bold">whoami</span><span class="term-dim">,</span> <span class="term-bold">projects</span><span class="term-dim">, or</span> <span class="term-bold">ls</span>
\n`;

    updatePromptDisplay();

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            processCommand(input.value);
            input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) { historyIndex--; input.value = commandHistory[historyIndex]; }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) { historyIndex++; input.value = commandHistory[historyIndex]; }
            else { historyIndex = commandHistory.length; input.value = ''; }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            // Tab completion
            const partial = input.value.trim().split(/\s+/);
            const last = partial[partial.length - 1];
            const node = resolvePath(currentPath);
            if (node && node.children) {
                const matches = Object.keys(node.children).filter(k => k.startsWith(last));
                if (matches.length === 1) {
                    partial[partial.length - 1] = matches[0];
                    input.value = partial.join(' ');
                }
            }
        }
    });

    // Click terminal body to focus input
    document.getElementById('terminal-body').addEventListener('click', () => input.focus());
});
