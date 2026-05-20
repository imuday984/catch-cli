# catch-cli

Local diagnostic terminal assistant powered by Gemini.

[![NPM Version](https://img.shields.io/npm/v/catch-cli?color=blue)](https://www.npmjs.com/package/catch-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

`catch` is an AI-powered terminal assistant that intercepts shell command failures, diagnoses the error on a secure backend, and prints simplified explanations and exact corrective commands directly inside your terminal.

No context switching, no copying-and-pasting errors into a web browser.

---

## How It Works

Unlike other CLI utilities, `catch` separates the execution environment from the AI processing environment to maintain absolute security.

```
[User Terminal]                                                 [Secure Vercel API]              [Google Gemini]
      │                                                                  │                               │
      ├─► Runs: catch <command>                                          │                               │
      ├─► Intercepts Stderr Output (Crash logs)                          │                               │
      │                                                                  │                               │
      ├─► POST JSON (Command + Cleaned Error) ──────────────────────────►│ (Injects GEMINI_API_KEY)      │
      │                                                                  ├─► Calls Native API ──────────►│
      │                                                                  │                               │
      │◄─ JSON Response (AI Solution string) ◄───────────────────────────┼◄─ Returns Content ◄───────────┘
      │
      └─► Prints formatted solution in terminal
```

## Features

* **Editor & Shell Agnostic:** Works inside VS Code terminal, Warp, standard `cmd`/`PowerShell`, or Linux/macOS shells.
* **Zero Configuration Required:** Works out of the box. No local API keys or third-party installations needed.
* **Secure Key Management:** Your private API key is kept completely secret on your serverless backend.
* **Automatic Formatting:** Strips ANSI escape codes and terminal noise before analyzing errors to minimize token usage and improve accuracy.

---

## Installation

Install the package globally via the NPM registry:

```bash
npm install -g catch-cli
```
## Usage

Simply prepend the `catch` keyword to any command you wish to execute:

```bash
catch <command>
```
### Example

**Intercepting Windows/Unix Command Confusion:**

```bash
catch ls fake-folder
```

'ls' is not recognized as an internal or external command,
operable program or batch file.

[CATCH] Analyzing crash...

========================================
EXPLANATION AND SOLUTION:
========================================
The error "ls' is not recognized" indicates that your system, likely Windows, doesn't have the `ls` command available or in its PATH. On Windows, the equivalent command to list directory contents is `dir`.

Run this command instead:
`dir fake-folder`
========================================
