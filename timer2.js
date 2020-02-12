const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
  if (key === '\u0062') {

    //my beep doesn't seem to work
    stdout.write('\x07');
    stdout.write('BEEP!\n');
  }
  if (key === '\u0031', '\u0032') {
    stdout.write(`setting timer for ${Number(key)} seconds...`);
    setTimeout(() => {
      stdout.write('BEEP!\n');
    }, Number(key) * 1000)
  }
});
