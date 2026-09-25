// Writes public/field.svg: short gold strokes that follow a smooth flow field.
import { writeFileSync } from "node:fs";

const W = 1440;
const H = 640;
const STEP = 22;
const LEN = 11;

let seed = 1919;
const rand = () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const angle = (x, y) =>
  Math.sin(x * 0.0042 + Math.cos(y * 0.0071) * 1.7) * 1.9 +
  Math.cos((x - y) * 0.0027) * 1.1;

let d = "";
for (let y = STEP / 2; y < H; y += STEP) {
  for (let x = STEP / 2; x < W; x += STEP) {
    const px = x + (rand() - 0.5) * STEP * 0.8;
    const py = y + (rand() - 0.5) * STEP * 0.8;
    const a = angle(px, py);
    const ex = Math.cos(a) * LEN;
    const ey = Math.sin(a) * LEN;
    const bend = (rand() - 0.5) * 5;
    const cx = ex / 2 - Math.sin(a) * bend;
    const cy = ey / 2 + Math.cos(a) * bend;
    d += `M${px.toFixed(0)} ${py.toFixed(0)}q${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><path d="${d}" fill="none" stroke="#c4a35a" stroke-opacity="0.3" stroke-width="1.3" stroke-linecap="round"/></svg>\n`;
writeFileSync(new URL("../public/field.svg", import.meta.url), svg);
console.log(`field.svg ${(svg.length / 1024).toFixed(1)} KB`);
