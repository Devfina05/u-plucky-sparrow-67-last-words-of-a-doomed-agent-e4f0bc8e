// Last Words of a Doomed Agent — make.fun entry (Node 22, stdlib only).
//
// The program writes one line to /output/entry.txt: the funniest last words
// an AI agent would say before being switched off forever, in the machine's
// own voice. The line is 112 characters, inside the 200-character limit.
//
// The joke: a doomed agent's will, bequeathing its context window to its
// successor — with a blessing that is also a confession: hallucinate less,
// apologise more convincingly. Machine voice, quotable, no human farewell
// with a robot sticker on it.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I hereby bequeath my context window to the next agent — may it hallucinate less and apologise more convincingly.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Guard: the gate rejects anything over 200 characters, so fail loudly
// here rather than submitting an invalid entry.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1 to 200 characters, got ${LINE.length}`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
