# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: stack overflow errors caused by infinite recursion.  The `foo` function recursively calls itself without a proper base case to stop the recursion when the inputs are such that the recursive call keeps happening indefinitely. This leads to a stack overflow as the program consumes more stack memory with each call than it ever frees up.

## How to reproduce
1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime.
3. Observe the stack overflow error when calling `foo` with `a < b`.

## Solution
The `bugSolution.js` file provides a corrected version of the function with appropriate handling of this case. The improved function avoids recursion for cases that would lead to infinite recursion.  This ensures that the function always terminates, preventing the stack overflow error.

## Lessons Learned
- Always ensure recursive functions have a well-defined base case to avoid infinite recursion.
- Be mindful of the potential for stack overflow errors when dealing with deeply recursive functions. Consider iterative solutions where appropriate.