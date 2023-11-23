/**
 * 提供jsx中的类名
 * @param {*} str
 * @returns
 */
function extractClassName(str) {
  let result = str.matchAll(/class(Name)?=["'](?<name>.*)["']/g);

  let list = [];
  for (const item of result) {
    console.log(item);
    list.push(item.groups['name']);
  }

  return list;
}

module.exports = {
  extractClassName,
};
