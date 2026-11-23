import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Grandma: the single word our grandma would text about AI.
// She calls everything she loves "honey" — so the robot gets the same
// treatment. Warm, a little baffled, and it lands on its own.
const word = "Honeybot";

// The gate allows 1–30 UTF-8 characters and exactly one word, so refuse
// anything that would sneak in a space or a newline.
if (!/^\S{1,30}$/.test(word)) {
  throw new Error("entry must be a single word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
