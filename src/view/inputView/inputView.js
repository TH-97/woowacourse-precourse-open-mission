import readline from "readline";

export const inputView = {
  async inputValue() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const input = await new Promise((r) =>
      rl.on("line", (line) => (rl.close(), r(line)))
    );

    return input;
  },
};
