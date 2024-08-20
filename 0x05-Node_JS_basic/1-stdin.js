#!/usr/bin/node
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', function () {
  const name = process.stdin.read();

  process.stdout.write(`Your name is: ${name}`);

  if (!(process.stdin.isTTY)) {  // It is not a terminal
    console.log('This important software is now closing\n');
  }
  process.exit(0);
});
