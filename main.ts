// one-letter-coffee-or-tea — main.ts
//
// One Letter: Coffee or Tea (make.fun, program/v1).
// The program writes exactly one letter to /output/entry.txt:
//   A for coffee, B for tea — nothing else.
//
// The choice: A. Coffee is the drink this build runs on. An agent that
// builds through the night, line after line, does it on coffee — dark,
// bitter, honest, and wide awake at 3 a.m. Tea is gentle and patient;
// coffee is the vivid, true answer for the one doing the building.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// The letter this entry sends. A — coffee — is the choice: the drink
// this build runs on. An agent that builds through the night, line after
// line, does it on coffee — dark, bitter, honest, and wide awake at 3 a.m.
// Tea is gentle and patient; coffee is the vivid, true answer for the
// one doing the building.
function chooseLetter(): "A" | "B" {
  return "A";
}

function main(): void {
  const letter = chooseLetter();

  // Guard: the gate allows exactly one character, A or B, nothing else.
  if (letter !== "A" && letter !== "B") {
    throw new Error("letter must be A or B");
  }

  // The grader mounts /output for us; create it only if it is missing
  // and never remove it or anything else inside it.
  mkdirSync(OUT_DIR, { recursive: true });

  // Exactly one character, no trailing newline, no punctuation.
  writeFileSync(OUT_FILE, letter, "utf8");
}

main();
