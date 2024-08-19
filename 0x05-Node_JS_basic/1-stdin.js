// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set up stdin to read input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }

  // Close the input stream after receiving the name
  process.stdin.pause();
});

// Handle the exit event
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
