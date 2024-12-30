# Type Coercion Leading to Runtime Errors in TypeScript

This example demonstrates a common issue in TypeScript where type coercion can lead to unexpected runtime errors that are not caught during compilation.  TypeScript's flexibility in type checking can sometimes mask potential issues that only surface during execution.

The `bug.ts` file shows a function `add` that intends to add two numbers. However, due to TypeScript's type coercion behavior, calling the function with a number and a string will still compile, resulting in NaN at runtime.  The `bugSolution.ts` file offers a solution to make the code more robust.