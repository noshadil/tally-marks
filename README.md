# Tally marks

This simple function will convert a number into tally marks.

## To install

npm install tally-marks

### Converts a number into a tally mark sting

```
const tallyMarks = require("tally-marks");
tallyMarks(12) // "卌,卌,||"
```

### with html:ture

```
const tallyMarks = require("tally-marks");
tallyMarks(6, { html: true }) // "<s>||||</s>,|"
```

### with custom tally marks

```
const tallyMarks = require("tally-marks");
tallyMarks(18, { five: `🖐️,`, one: `☝️` }) //"🖐️🖐️🖐️☝️☝️☝️"
```
