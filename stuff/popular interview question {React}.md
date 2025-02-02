Interviewer would ask to make a counter project, with 2 buttons : one would increase the value by 1 and other would decrease by the same. the main point comes **after** you have implemented all this. 
```
let [counter, setCounter] = useState(0)
  const addval=() => {
      // counter = counter +1;

    setCounter(counter + 1);
    console.log("value added", counter);

  }

  const subval = () => {
    // counter = counter -1;
    setCounter(counter - 1)
    console.log("value subbed", Math.random());

  }
```

## The question
> now that the counter is made, without running the code can you explain what would the output be if it gets modified like this?

```
let [counter, setCounter] = useState(0)
  const addval=() => {
      // counter = counter +1;

    setCounter(counter + 1);
    setCounter(counter + 1);   //same line repeated multiple times
    setCounter(counter + 1);
	setCounter(counter + 1);
	
    console.log("value added", counter);

  }

  const subval = () => {
    // counter = counter -1;
    setCounter(counter - 1)
    console.log("value subbed", Math.random());

  }
```

> what would be the output if that line is repeated ?


### Answer : 
there will be no change to the site

## explanation
This is how React works... it detects redundancy in code, and only implements it once because of `useState(0)` works like that.
To implement the said lines, to handle multiple increases, we may use the popular-amongst-AI `prevCounter`  : 

```
setcCounter((prevCounter) => prevCounter + 1)
```

> **💡  why are we using an arrow function ? isn't `setCounter` itself a declared variable?**

That's true, `setCounter` is itself a declared variable, but **BEHIND THE SCENES**, it is actually a returning function in that parenthesis. hence, we have to use an arrow function. Note that we aren't using {} curly braces, cuz not needed /// 

```
const addval=() => {
	setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    }
  
```

This handles the multiple increases in Counter.