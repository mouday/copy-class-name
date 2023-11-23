const { extractClassName } = require("../../src/utils/index.js");

test("class", () => {
  const input = `<div class="test">
            <div class="text-children"></div>
          </div>`;
  const output = ["test", "text-children"];
  expect(extractClassName(input)).toEqual(output);
});

test("extractClassName2", () => {
  const input = `<div class="test" :data="100">
            <div class="text-children"></div>
          </div>`;
  const output = ["test", "text-children"];
  expect(extractClassName(input)).toEqual(output);
});

test("react className", () => {
  const input = `<div className="test">
            <div className="text-children"></div>
          </div>`;
  const output = ["test", "text-children"];
  expect(extractClassName(input)).toEqual(output);
});