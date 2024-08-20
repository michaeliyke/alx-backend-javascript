#!/usr/bin/node
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  console.log(`Your name is: ${name}`);

  if (!(process.stdin.isTTY)) {  // It is not a terminal
    console.log('This important software is now closing');
  }
  process.exit(0);
});
