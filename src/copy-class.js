const vscode = require("vscode");
const { extractClassName, generateClassName } = require("./utils/index.js");

module.exports = vscode.commands.registerCommand(
  "copy-class-name.copy",
  function () {
    const { document, selection } = vscode.window.activeTextEditor;

    const selectedText = document.getText(selection); // 获取选中部分内容
    // console.log(selectedText);

    const classNames = extractClassName(selectedText);

    let list = generateClassName([...new Set(classNames)]);
    // console.log(list);

    // 写入剪切板
    vscode.env.clipboard.writeText(list);

    vscode.window.showInformationMessage("已复制到剪切板");
  }
);
