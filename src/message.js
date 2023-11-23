const vscode = require("vscode");

// The command has been defined in the package.json file
// Now provide the implementation of the command with  registerCommand
// The commandId parameter must match the command field in package.json
module.exports = vscode.commands.registerCommand(
  "copy-class-name.helloWorld",
  function () {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World from copy-class-name!");
  }
);
