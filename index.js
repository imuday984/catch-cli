#!/usr/bin/env node

const { spawn } = require('child_process');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: catch <command>");
  process.exit(0);
}

const command = args[0];
const commandArgs = args.slice(1);
const fullCommand = `${command} ${commandArgs.join(' ')}`;

const child = spawn(fullCommand, {
  stdio: ['inherit', 'pipe', 'pipe'], 
  shell: true
});

let errorLog = '';

child.stdout.on('data', (data) => {
  process.stdout.write(data);
});

child.stderr.on('data', (data) => {
  process.stderr.write(data);
  errorLog += data.toString();
});

function stripAnsi(text) {
  return text.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
}

async function askAI(rawError) {
  const cleanError = stripAnsi(rawError).trim();
  
  console.log('\n[CATCH] Analyzing crash...');

  const backendUrl = "https://catch-backend-udayvardhan998-gmailcoms-projects.vercel.app/api/explain";

  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        command: fullCommand,
        error: cleanError
      })
    });

    const data = await response.json();

    if (response.ok) {
      return data.solution;
    } else {
      return `Backend Error: ${data.error || 'Unknown error occurred'}`;
    }
  } catch (err) {
    return `Failed to connect to backend: ${err.message}`;
  }
}

child.on('close', async (code) => {
  if (code !== 0 && errorLog.trim() !== '') {
    const solution = await askAI(errorLog);
    console.log('\n========================================');
    console.log('EXPLANATION AND SOLUTION:');
    console.log('========================================');
    console.log(solution);
    console.log('========================================\n');
  }
  process.exit(code);
});