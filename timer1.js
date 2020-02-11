let userInput = process.argv.slice(2);
let std = process.stdout;

userInput = userInput.sort();

for (let input of userInput) {
  if (input < 0 || isNaN(input)) {
    input++
  } else {
    setTimeout(() => {
      console.log('beep');
      // std.write('\x07');
    }, input * 1000)
  }
}
