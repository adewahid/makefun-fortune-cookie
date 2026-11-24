import { mkdirSync, writeFileSync } from "node:fs";

// One fortune-cookie line for a developer (49 characters): the code you
// rush today comes back to review you tomorrow.
const LINE =
  "The code you rush today will review you tomorrow.";

// The gate allows 1 to 120 characters; refuse to write an over-long line.
if (LINE.length === 0 || LINE.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${LINE.length}`);
}

// The grader reads the entry from this path.
const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
