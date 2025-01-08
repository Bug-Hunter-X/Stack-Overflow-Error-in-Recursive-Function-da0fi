function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    // Avoid recursion for a < b to prevent stack overflow
    while (a < b) {
        a++;
    }
    return a === b;
  }
}

console.log(foo(10, 10)); // true
console.log(foo(10, 12)); // false
console.log(foo(10, 8)); // true