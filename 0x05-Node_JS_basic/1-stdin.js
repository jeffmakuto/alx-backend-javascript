/**
 * This script prompts the user to enter their name and displays it on the console.
 * It uses the standard input (stdin) and standard output (stdout) streams of Node.js.
 * 
 * @module stdin
 */
process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', function(data) {
    const input = data.trim();
    if (input) {
        process.stdout.write(`Your name is: ${input}\n`);
        process.stdout.write('This important software is now closing\n');
        process.exit();
    }
});
