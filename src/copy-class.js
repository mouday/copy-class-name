const vscode = require("vscode");
const { extractClassName } = require("./utils/index.js");

/**
 * 生成类名文件
 * @param {*} list
 * @returns
 */
function generateClassName(list) {
  let classList = [];

  for (let item of list) {
    classList.push(`.${item} {}`);
  }

  return classList.join("\n\n");
}

module.exports = vscode.commands.registerCommand(
  "copy-class-name.copy",
  function () {
    const { document, selection } = vscode.window.activeTextEditor;

    const selectedText = document.getText(selection); // 获取选中部分内容
    // console.log(selectedText);

    const classNames = extractClassName(selectedText)

    let list = generateClassName([...new Set(classNames)]);
    // console.log(list);

    // 写入剪切板
    vscode.env.clipboard.writeText(list);

    vscode.window.showInformationMessage("已复制到剪切板");
  }
);
