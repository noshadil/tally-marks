# Tally marks

This simple function will convert a number into tally marks.

## To install

npm install tally-marks

### Converts a number into a tally mark sting

```console
const tallyMarks = require("tally-marks");
tallyMarks(12)
```

// 卌,卌,||

### with html:ture

```console
const tallyMarks = require("tally-marks");
tallyMarks(13, { html: true })
```

// ~~||||~~,~~||||~~,|||

### with custom tally marks

```console
const tallyMarks = require("tally-marks");
tallyMarks(18, { five: `🖐️ `, one: `☝️` })
```

// 🖐️🖐️🖐️☝️☝️☝️
