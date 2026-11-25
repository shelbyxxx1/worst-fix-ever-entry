import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const message = 'fix: anyone could delete anything; now only the intern can';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), message, 'utf8');
