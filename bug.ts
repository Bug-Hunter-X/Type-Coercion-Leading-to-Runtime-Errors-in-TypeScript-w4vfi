function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, "2"); // This will compile without error, but may lead to unexpected behavior at runtime
console.log(result); // Outputs NaN