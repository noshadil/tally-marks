const internals = {
  printTally: (times, str) => {
    let returnString = "";
    for (let i = 0; i < times; i++) {
      returnString += str;
    }
    return returnString;
  }
};
module.exports = (num = 0, { five = "卌,", one = "|", html = false } = {}) => {
  if (html) {
    five = `<s>||||</s>,`;
  }
  return (
    internals.printTally(parseInt(num / 5), five) +
    internals.printTally(num % 5, one)
  );
};
