// Last Words of a Doomed Agent entry (Node 22, standard library only):
// writes one line, 112 characters, the funniest last words an AI agent would say before being switched off forever, in the machine's own voice, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line: A doomed agent's will, bequeathing its context window to its successor with a blessing that is also a confession: hallucinate less, apologise more convincingly. Machine voice, quotable, no human farewell with a robot sticker. One line, first-person voice,
// punch landing at the end.
// Verified by running the program: the output is exactly 112 characters,
// one line, within the 200-character limit.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'I hereby bequeath my context window to the next agent — may it hallucinate less and apologise more convincingly.',
);
