const tallyMarks = require("../index");
const assert = require("assert");
describe("#indexOf()", function() {
  it("should return 卌,卌,|| for 12", function() {
    assert.equal(tallyMarks(12), "卌,卌,||");
  });

  it("should return <s>||||</s>,|| for 6", function() {
    assert.equal(tallyMarks(6, { html: true }), "<s>||||</s>,|");
  });

  it("should return null for 0", function() {
    assert.equal(tallyMarks(0, { html: true }), "");
  });

  it("should return ||| for 3", function() {
    assert.equal(tallyMarks(3, { html: true }), "|||");
  });

  it("should return 🖐️ 🖐 ️🖐 ️☝️☝️☝️ for 18", function() {
    assert.equal(
      tallyMarks(18, { five: `🖐️ `, one: `☝️` }),
      "🖐️ 🖐️ 🖐️ ☝️☝️☝️"
    );
  });

  it("should return null if you pass nothing", function() {
    assert.equal(tallyMarks(), "");
  });
});
