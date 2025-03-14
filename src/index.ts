// Example ESM import
import { readFile } from "node:fs/promises";

const main = async () => {
  console.log("Hello from ESM TypeScript!");

  try {
    // Example async ESM code
    const packageJson = await readFile("./package.json", "utf-8");
    console.log("Package info:", JSON.parse(packageJson).name);
  } catch (err) {
    console.error("Error:", err);
  }
};

await main();
