###Converts a number into a tally mark sting

```
const tallyMarks = require("../index");
tallyMarks(12) // "卌,卌,||"
```

###with html:ture

```
tallyMarks(6, { html: true }) // "<s>||||</s>,|"
```

###with cuntome tally marks

```
tallyMarks(18, { five: `🖐️,`, one: `☝️` } //"🖐️🖐️🖐️☝️☝️☝️"
```
