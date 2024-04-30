/**
 * This script prompts the user to enter their name and displays it on the console.
 * It uses the standard input (stdin) and standard output (stdout) streams of Node.js.
 * 
 * @module stdin
 */
process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
