---
title: Intro to debugging
length: 60
tags: bug, debugging, debugger, chrome, dev tools
---

# Intro to debugging

### Learning Goals

- Understand what a bug is
- Understand the debugging process
- Understand print and interactive debugging

### Vocabulary

- `bug` An error, flaw, failure or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.  
- `error message` Will usually say: what line the error is coming from, *hopefully* what the error is, and provide a `stack trace` (what is going on in the interpreter).
- `print debugging` (or tracing) is the act of watching (live or recorded) trace statements, or print statements, that indicate the flow of execution of a process.
- `interactive debugging` A debugging method where code is stopped in runtime, allowing you to interact with the codebase at that point in time.
- `console.log` A tool used for print debugging
- `debugger` A tool used for interactive debugging

### The History of the 'bug'

The term "bug" was used in an account by computer pioneer [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper), who publicized the cause of a malfunction in an early electromechanical computer. A typical version of the story is:

```
In 1946, when Hopper was released from active duty, she joined the Harvard Faculty 
at the Computation Laboratory where she continued her work on the Mark II and Mark 
III. Operators traced an error in the Mark II to a moth trapped in a relay, coining 
the term bug. This bug was carefully removed and taped to the log book. 
Stemming from the first bug, today we call errors or glitches in a program a bug.
```

### The Debugging Process

1. Attempt to reproduce the problem. Does it persist on page reload?
2. Attempt to isolate the problem.
  * Check for error messages. Make sure that your console is open!!!
  * If there is an error message: 
    1. Read the error message. Do I know what it means? If not, [google it!](https://www.google.com/)(you can always copy and paste the error directly into google)
    2. Go to the line specified in the message (your error message has isolated the issue for you)
  * If there is not:
    * Attempt to answer the following questions:
    1. What behavior should I be seeing that I am not? 
    2. Where does that live in my code?
3. Use a debugger tool to examine program states (values of variables, plus the call stack) and track down the origin of the problem(s).
  * In simple cases, tracing is just a few `console.log` statements, which output the values of variables at certain points of program execution.

### Debugging Methods

There are two primary methods that y'all will use in your time here at turing and beyond.

The first is `print debugging` (or tracing), which is the act of watching (live or recorded) trace statements, or print statements, that indicate the flow of execution of a process. We've been doing this consistently using `console.log` statements.

The second is `interactive debugging` which is a debugging method where code is stopped in runtime, allowing you to interact with the codebase at that point in time. JavaScript has a built in tool we can use for interactive debugging called debugger. We will not go into too much detail on this tool but there is an excellent tutorial on how to use it [here](https://developers.google.com/web/tools/chrome-devtools/javascript/)

**Note** These tools can and **should** be used proactively to test data as you develop to confirm that variables, properties, etc. are what you think they are.

### Practice

In this repo, there are bugs on the following branches:
* **Note** For all of these branches, the bug free behavior is that the app can correctly add two numbers together.

### Instructor demonstration
* `bug1`
  * Should give an idea of places to insert debugger statements as well as how to effectively leverage them

### Your turn
1. `bug2`
2. `bug3` Additional bug free behavior: The 'Add em up!' button should be disabled if either input is empty
3. `bug4` 
2. `bug5` Additional bug free behavior: Both inputs should be cleared on submit
3. `bug6` Additional bug free behavior: Two floats can be added together correctly

### Dig Deeper

* [Chrome Dev Tools Debugging Tutorial](https://developers.google.com/web/tools/chrome-devtools/javascript/)
