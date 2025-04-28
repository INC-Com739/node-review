Objective
Reinforce core Node.js skills: creating scripts, using modules, and working in the terminal.
Demonstrate understanding of NPM basics: package installation, versioning, and scripts.
Combine the knowledge from previous days into one small review project.

Part 1: Project Setup
Use your existing project folder named node-review.
Ensure your package.json includes

"type": "module"
so you can use import/export syntax.
Part 2: Custom Module (utils.js)
Create a file named utils.js.
Export two utility functions of your choice (e.g. greeting, string/array transformer).
Part 3: Main Script (app.js)
Create app.js.
Import your utilities from utils.js using ES Module syntax.
Install and import one third‑party package (e.g. lodash or inquirer).
Call each of your custom functions and demonstrate a feature from your chosen package.
Part 4: NPM Script
In package.json, add a "start" script to run app.js.
Verify with:

npm start
that it runs without errors.
Part 5: Submission Requirements
GitHub Repository (required):

Create a public repo named node-review.
Push all project files (package.json, utils.js, app.js, etc.).
Submit the repo link.
Evidence of Success:

Include a screenshot or terminal log showing:

Your project’s folder structure.
Successful execution of npm start.