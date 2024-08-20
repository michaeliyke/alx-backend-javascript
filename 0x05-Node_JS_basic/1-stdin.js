#!/usr/bin/node
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', function () {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }

  if (!(process.stdin.isTTY)) {  // It is not a terminal
    process.stdout.write('This important software is now closing\n');
  }
  process.exit();
});
