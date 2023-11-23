const { extractClassName } = require("../src/utils/index.js");

test("extractClassName", () => {
  const str = "className='abc'";
  console.log(extractClassName(str));
});
