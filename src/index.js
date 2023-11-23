const vscode = require("vscode");
// const message = require("./message.js");
// const navigation = require("./navigation.js");
const copyClass = require("./copy-class.js");

function activate(context) {
  vscode.window.showInformationMessage("插件成功激活!");
  // context.subscriptions.push(message);
  // context.subscriptions.push(navigation);
  context.subscriptions.push(copyClass);
}

module.exports = {
  activate,
};
