const arg = process.argv[2];
const x = parseInt(arg);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
}

for (let index = 0; index < x; index++) {
  console.log("C is fun");
}
