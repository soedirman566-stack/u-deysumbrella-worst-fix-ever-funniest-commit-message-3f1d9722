// Worst Fix Ever: Funniest Commit Message — make.fun entry.
// Writes one line (a commit message for a fix that backfired) to
// /output/entry.txt, or to the path given as argv[2].
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "fix: load balancer works now; it distributes the outage evenly to every server";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${out}`);
