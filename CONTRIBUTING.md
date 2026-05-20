# Contributing to catch-cli

First off, thank you for taking the time to contribute! This project is built by developers, for developers, and we welcome contributions of all types—whether it's fixing a bug, adding a new feature, or improving documentation.

Here are the guidelines to help you get started with contributing to `catch-cli`.

---

## How Can I Contribute?

### 1. Reporting Bugs
Before opening a new issue, please search the existing issues to ensure the bug hasn't already been reported. If it is new, open an issue and include:
* Your operating system (Windows, macOS, Linux).
* The exact shell/terminal you are using (PowerShell, bash, zsh, Warp).
* The command that caused the failure.
* A copy of the crash output and the resulting `catch` assistant message.

### 2. Suggesting Features
If you have an idea for a feature or optimization:
* Check the open issues to see if it is already being discussed.
* Open an issue explaining the proposed change, why it would be useful, and an example of how it would work in the terminal.

### 3. Submitting Pull Requests (PRs)
Ready to write some code? Follow the workflow below to set up your environment.

---

## Local Development Setup

To work on `catch-cli` locally, follow these steps:

### 1. Fork and Clone the Repository
Fork the repository on GitHub, then clone your fork locally:

```bash
git clone [https://github.com/YOUR_USERNAME/catch-cli.git](https://github.com/YOUR_USERNAME/catch-cli.git)
cd catch-cli
```
### 2. Set Up Local Testing Links

Since this is a global CLI tool, you can use NPM's linking feature to test your local edits in real-time. Inside your cloned `catch-cli` directory, run:

```bash
npm link
```
### 3. Testing Your Changes

Test that your logic handles command failures correctly by running a deliberate error command:

```bash
catch ls non-existent-directory
```
## Pull Request Guidelines

To ensure a smooth review process, please adhere to these guidelines when submitting a Pull Request:

* **Keep it focused:** Try to make your PR address only one issue or feature. Smaller, focused PRs are much easier to review and merge quickly.
* **Commit Messages:** Write clear, concise commit messages. We prefer conventional commits (e.g., `feat: add silent mode flag` or `fix: resolve crash on silent flag parsing`).
* **Avoid formatting-only changes:** Unless you are explicitly refactoring or resolving style issues, please avoid massive linting/style changes in functional PRs.
* **Update Documentation:** If your PR introduces a new CLI flag or configuration option, please update the `README.md` to explain how to use it.

Thank you for helping us make terminal debugging seamless for developers everywhere!
