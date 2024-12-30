function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

//or using a more strict type assertion
function addStrict(a: number, b: number): number {
  return a + b;
}

try {
  const result = addStrict(1, "2" as number); //This will throw a compile-time error
  console.log(result);
} catch (error) {
  console.error("Error:", error);
}

try {
  const result = add(1, 2);
  console.log(result); // Outputs 3
} catch (error) {
  console.error("Error:", error);
}

try {
  const result = add(1, "2"); // This will throw a runtime error
  console.log(result);
} catch (error) {
  console.error("Error:", error);
}
