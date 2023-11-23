/**
 * 提供jsx中的类名
 * @param {*} str
 * @returns
 */
function extractClassName(str) {
  let result = str.matchAll(/class(Name)?=["'](?<name>.*?)["']/g);

  let list = [];
  for (const item of result) {
    list.push(item.groups['name']);
  }

  return list;
}


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


module.exports = {
  extractClassName,
  generateClassName
};
