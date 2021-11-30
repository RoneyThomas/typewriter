const sentence = "hello there from lighthouse labs" + "\n";
let startTime = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + startTime);
  startTime += 50;
}
// process.stdout.write('\n');