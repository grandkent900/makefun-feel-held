import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The kettle has gone quiet. Steam rises, thinning into the late light, going nowhere in particular. Outside, someone sweeps a step that is already clean. You can stay here a while. Nothing waits on the other side of this page.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
